// contracts/Alpha.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract Alpha {
    uint256 private number;

    // Emitted when the stored number changes
    event NumberChanged(uint256 newNumber);

    // Stores a new number in the contract
    function store(uint256 newNumber) public {
        number = newNumber;
        emit NumberChanged(newNumber);
    }

    // Reads the last stored number
    function retrieve() public view returns (uint256) {
        return number;
    }
}