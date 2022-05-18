import dotenv from "dotenv";
import { ethers } from "hardhat";
import metadata from "../src/assets/metadata.json";

dotenv.config();

const contractAddress = process.env.CONTRACT_ADDRESS;
const myAddress = process.env.MY_ADDRESS;

async function main() {
  if (contractAddress && myAddress) {
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
  } else
    throw Error(
      "Please put contract address and your wallet address on the env file",
    );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
