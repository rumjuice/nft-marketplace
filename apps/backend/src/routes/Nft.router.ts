import { Request, Response, Router } from "express";
import StatusCodes from "http-status-codes";
import { NFT } from "../models/Nft.model";
import NftService from "../services/Nft.service";

// Constants
const router = Router();
const { OK } = StatusCodes;

// Paths
const path = {
  nft: "/nft",
};

/**
 * Get all nft.
 */
router.get(path.nft, async (_req: Request, res: Response<NFT>) => {
  const nft = await NftService.getNft();
  return res.status(OK).json(nft);
});

export default router;
