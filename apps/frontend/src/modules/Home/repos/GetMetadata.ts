import ky from "ky";
import { Metadata } from "../Types";

/**
 * Get nft metadata.
 *
 * @returns
 */
async function getMetadata(id: number): Promise<Metadata> {
  return await ky.get(`http://localhost:8080/metadata/${id}`).json();
}

export default getMetadata;
