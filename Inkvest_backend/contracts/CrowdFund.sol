// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./CrowdCoin.sol";
import "./ImageNFT.sol";

/**
 * @title CrowdFund
 * @notice Crowdfunding + reward token + NFT minting for each art campaign.
 */
contract CrowdFund {
    /// -----------------------------------------------------------------------
    /// Errors
    /// -----------------------------------------------------------------------
    error InvalidGoal();
    error InvalidDuration();
    error NotCreator();
    error GoalNotReached();
    error AlreadyClaimed();
    error NotEnded();
    error AlreadyEnded();
    error ZeroContribution();
    error NothingToRefund();
    error TransferFailed();
    error NotBacker();
    error AlreadyMinted();

    /// -----------------------------------------------------------------------
    /// Events
    /// -----------------------------------------------------------------------
    event CampaignCreated(
        uint256 indexed id,
        address indexed creator,
        uint256 goal,
        uint32 startAt,
        uint32 endAt,
        string title,
        string artist,
        string uri
    );
    event Contributed(uint256 indexed id, address indexed caller, uint256 amount);
    event Withdraw(uint256 indexed id);
    event Refund(uint256 indexed id, address indexed caller, uint256 amount);
    event NFTMinted(uint256 indexed id, address indexed caller, uint256 tokenId);

    /// -----------------------------------------------------------------------
    /// Storage
    /// -----------------------------------------------------------------------
    struct Campaign {
        address creator;
        uint256 goal;
        uint256 pledged;
        uint32 startAt;
        uint32 endAt;
        bool claimed;
        string title;
        string artist;
        string uri;     // image / metadata URI
    }

    uint256 public nextCampaignId = 1;
    mapping(uint256 => Campaign) public campaigns;
    mapping(uint256 => mapping(address => uint256)) public pledgedOf;
    mapping(uint256 => mapping(address => bool)) public nftMinted;

    CrowdCoin public immutable token;
    ImageNFT public immutable nft;

    /// -----------------------------------------------------------------------
    /// Constructor
    /// -----------------------------------------------------------------------
    constructor(CrowdCoin _token, ImageNFT _nft) {
        token = _token;
        nft = _nft;
    }

    /// -----------------------------------------------------------------------
    /// Campaign logic
    /// -----------------------------------------------------------------------
    function createCampaign(
        uint256 _goal,
        uint32 _duration,
        string memory _title,
        string memory _artist,
        string memory _uri
    ) external returns (uint256 id) {
        if (_goal == 0) revert InvalidGoal();
        if (_duration == 0) revert InvalidDuration();

        uint32 start = uint32(block.timestamp);
        uint32 end = start + _duration;

        id = nextCampaignId++;
        campaigns[id] = Campaign({
            creator: msg.sender,
            goal: _goal,
            pledged: 0,
            startAt: start,
            endAt: end,
            claimed: false,
            title: _title,
            artist: _artist,
            uri: _uri
        });

        emit CampaignCreated(id, msg.sender, _goal, start, end, _title, _artist, _uri);
    }

    function contribute(uint256 _id) external payable {
        Campaign storage camp = campaigns[_id];
        if (block.timestamp > camp.endAt) revert AlreadyEnded();
        if (msg.value == 0) revert ZeroContribution();

        camp.pledged += msg.value;
        pledgedOf[_id][msg.sender] += msg.value;

        token.mint(msg.sender, msg.value); // 1 wei => 1 FUND

        emit Contributed(_id, msg.sender, msg.value);
    }

    function withdraw(uint256 _id) external {
        Campaign storage camp = campaigns[_id];
        if (msg.sender != camp.creator) revert NotCreator();
        if (block.timestamp < camp.endAt) revert NotEnded();
        if (camp.pledged < camp.goal) revert GoalNotReached();
        if (camp.claimed) revert AlreadyClaimed();

        camp.claimed = true;
        (bool ok, ) = camp.creator.call{value: camp.pledged}("");
        if (!ok) revert TransferFailed();

        emit Withdraw(_id);
    }

    function refund(uint256 _id) external {
        Campaign storage camp = campaigns[_id];
        if (block.timestamp < camp.endAt) revert NotEnded();
        if (camp.pledged >= camp.goal) revert GoalNotReached();

        uint256 bal = pledgedOf[_id][msg.sender];
        if (bal == 0) revert NothingToRefund();

        pledgedOf[_id][msg.sender] = 0;
        camp.pledged -= bal;

        token.burn(msg.sender, bal);

        (bool ok, ) = payable(msg.sender).call{value: bal}("");
        if (!ok) revert TransferFailed();

        emit Refund(_id, msg.sender, bal);
    }

    /// -----------------------------------------------------------------------
    /// NFT minting
    /// -----------------------------------------------------------------------

    /**
     * @notice Backer mints an NFT representing the artwork they supported.
     *         - Allowed once per backer per campaign
     *         - Campaign must have reached its goal
     */
    function mintArtworkNFT(uint256 _id) external {
        Campaign storage camp = campaigns[_id];
        if (camp.pledged < camp.goal) revert GoalNotReached();
        if (pledgedOf[_id][msg.sender] == 0) revert NotBacker();
        if (nftMinted[_id][msg.sender]) revert AlreadyMinted();

        nftMinted[_id][msg.sender] = true;

        uint256 tokenId = nft.mint(msg.sender, camp.uri);
        emit NFTMinted(_id, msg.sender, tokenId);
    }

    /// -----------------------------------------------------------------------
    /// Fallback
    /// -----------------------------------------------------------------------
    receive() external payable {
        revert("Use contribute()");
    }
}
