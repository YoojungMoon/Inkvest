// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title ImageNFT
 * @dev ERC‑721 token whose metadata URI points to the artwork image.
 *      CrowdFund (owner) mints NFTs for backers after a successful campaign.
 */
contract ImageNFT is ERC721URIStorage, Ownable {
    uint256 public nextTokenId;

    constructor() ERC721("Inkvest Artwork NFT", "ART") {}

    /**
     * @notice Mint a new NFT to `to` with metadata `uri`.
     *         Only callable by the contract owner (CrowdFund).
     */
    function mint(address to, string memory uri) external onlyOwner returns (uint256) {
        uint256 tokenId = ++nextTokenId;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        return tokenId;
    }
}
