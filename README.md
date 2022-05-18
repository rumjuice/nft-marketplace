# NFT Marketplace

MENG NFT Marketplace, running on local Ganache server

### As part of Advanced Blockchain Technologies Assignment

Author: **Ramdhani Rachmansyah -- 101391780**

George Brown College

#

## Instruction

- Make sure you have _Ganache_ installed and running
- Deploy the contract: `yarn backend deploy:ganache`
- Copy the contract address to the `.env.sample` file on `apps/backend` directory
- Input your wallet address to the env file
- Rename it to `.env`
- Mint the token: `yarn backend mint:ganache`
- Start frontend and backend: `yarn start`

## Project features

1. List all NFTs that are minted on the Ganache blockchain
2. View metadata of the NFT
3. Metadata is saved on the json file and served via api
4. Get all NFT api will query all ERC721 Transfer event through the blockchain and filter the specified contract address. Then call the `Contract.tokenUri()` method to get the TokenUri of each token id
5. Project structured using Yarn workspace (mono-repo)

## Stack

### Front-end

- React TypeScript, ky, Tailwind

### Back-end

- Node TypeScript, Express, Hardhat, OpenZeppelin

---
