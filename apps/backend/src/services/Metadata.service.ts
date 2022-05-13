import metadata from "../assets/metadata.json";
import { Metadata } from "../models/Metadata.model";

/**
 * get nft metadata.
 *
 * @param tokenId
 * @returns
 */
async function getMetadata(tokenId: string): Promise<Metadata> {
  return metadata.filter((m) => m.id === parseInt(tokenId))[0];
}

export default {
  getMetadata,
} as const;
