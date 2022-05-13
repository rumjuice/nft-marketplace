import { Request, Response, Router } from "express";
import StatusCodes from "http-status-codes";
import MetadataService from "../services/Metadata.service";

// Constants
const router = Router();
const { OK, BAD_REQUEST, NOT_FOUND } = StatusCodes;

// Paths
const path = {
  metadata: "/metadata/:tokenId",
};

/**
 * Get nft metadata.
 */
router.get(
  path.metadata,
  async (req: Request<{ tokenId: string }>, res: Response) => {
    const tokenId = req.params.tokenId;
    if (tokenId) {
      const metadata = await MetadataService.getMetadata(tokenId);
      return metadata
        ? res.status(OK).json(metadata)
        : res.status(NOT_FOUND).json("Metadata not found");
    }
    return res.status(BAD_REQUEST).json("Token id is missing");
  },
);

export default router;
