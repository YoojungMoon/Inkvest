// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Vesting {
    IERC20 public immutable token;
    uint64 public immutable cliff;
    uint64 public immutable duration;
    mapping(address => uint256) public claimed;

    constructor(IERC20 _token, uint64 _cliffMonths, uint64 _durationMonths) {
        token = _token;
        cliff = uint64(block.timestamp + _cliffMonths * 30 days);
        duration = uint64(_durationMonths * 30 days);
    }

    function claimable(address user) public view returns (uint256) {
        uint256 total = token.balanceOf(address(this)) / 2;
        if (block.timestamp < cliff) return 0;
        uint256 elapsed = block.timestamp - cliff;
        if (elapsed >= duration) return total - claimed[user];
        return (total * elapsed) / duration - claimed[user];
    }

    function claim() external {
        uint256 amount = claimable(msg.sender);
        require(amount > 0, "Nothing");
        claimed[msg.sender] += amount;
        token.transfer(msg.sender, amount);
    }
}
