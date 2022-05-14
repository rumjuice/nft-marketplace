import { ethers } from "hardhat";
import metadata from "../src/assets/metadata.json";

// const friends = [
//   "0x9321ef8Ccf26Ca4d64F7213076B3BAb0F6253E96",
//   "0x4Ea580c6AAA91c7Ed096f3dF14AFEEE76900E59F",
//   "0x079F340C9990257546Ac89E22C13E5ee203F7c09",
// ];
const contractAddress = "0x5f74042a94A4E03C47040f8eE5a05b32CEed097b";
const myAddress = "0x9321ef8Ccf26Ca4d64F7213076B3BAb0F6253E96";

async function main() {
  const nft = await ethers.getContractAt("MengNFT", contractAddress);

  const signer0 = ethers.provider.getSigner(0);
  const nonce = await signer0.getTransactionCount();

  for (const [i, m] of metadata.entries()) {
    const tokenURI = `http://localhost:8080/metadata/${m.id}`;
    await nft.mint(myAddress, tokenURI, {
      nonce: nonce + i,
    });
  }
  // metadata.forEach((m) => {

  // });
  // for (let i = 0; i < friends.length; i++) {
  //   const tokenURI =
  //     "https://gateway.ipfs.io/ipfs/Qme7uRMyQ77MQXSKZdtcVQ7ew8ATu6mnPzubJ2xb75Q8Fx";
  //   await nft.awardItem(friends[i], tokenURI, {
  //     nonce: nonce + i,
  //   });
  // }

  console.log("Minting is complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
