import { ethers } from "hardhat";
import metadata from "../src/assets/metadata.json";

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

  console.log("Minting is complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
