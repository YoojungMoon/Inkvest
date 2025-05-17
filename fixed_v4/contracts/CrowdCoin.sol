// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title CrowdCoin
 * @dev Reward ERC‑20 token minted 1:1 with wei contributed.
 */
contract CrowdCoin is ERC20, Ownable {
    constructor() ERC20("Inkvest Fund Token", "FUND") {}

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) external onlyOwner {
        _burn(from, amount);
    }
}
