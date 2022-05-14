import dotenv from "dotenv";
import { Contract, providers } from "ethers";
import artifact from "../../artifacts/contracts/MengNFT.sol/MengNFT.json";
import { NFT, Token } from "../models/Nft.model";

dotenv.config();

const provider = new providers.JsonRpcProvider(process.env.GANACHE_URL);
const contract = new Contract(
  process.env.CONTRACT_ADDRESS as string,
  artifact.abi,
  provider,
);

/**
 * get all nft.
 *
 * @returns
 */
async function getNft(): Promise<NFT> {
  const filter = contract.filters.Transfer();
  const logs = await provider.getLogs({
    ...filter,
    address: contract.address,
    fromBlock: 0,
  });

  const tokens: Token[] = [];
  for (const l of logs) {
    const id = Number(l.topics[3]);
    const uri = await contract.tokenURI(id);
    const owner = await contract.ownerOf(id);
    tokens.push({ uri, owner, id });
  }

  const data: NFT = {
    name: await contract.name(),
    symbol: await contract.symbol(),
    address: contract.address,
    tokens: tokens,
  };

  return data;
}

export default {
  getNft,
} as const;
