//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MengNFT is ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  constructor() ERC721("Meng", "MENG") {}

  function mint(address owner, string memory tokenURI) external {
    _tokenIds.increment();

    uint256 tokenId = _tokenIds.current();
    _mint(owner, tokenId);
    _setTokenURI(tokenId, tokenURI);
  }
}
