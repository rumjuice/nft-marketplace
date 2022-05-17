import ky from "ky";
import { NFT } from "../Types";

/**
 * Get all transactions.
 *
 * @returns
 */
async function getAllNft(): Promise<NFT> {
  return await ky.get("http://localhost:8080/nft").json();
}

export default getAllNft;
