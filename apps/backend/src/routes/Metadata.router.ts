import { Request, Response, Router } from "express";
import StatusCodes from "http-status-codes";

// Constants
const router = Router();
const { OK, BAD_REQUEST } = StatusCodes;

// Paths
export const path = {
  metadata: "/metadata",
} as const;

/**
 * Get account balance.
 */
router.get(
  path.metadata,
  async (req: Request<{ id: string }>, res: Response) => {
    console.log("get metadata");
    const id = req.query.id;
    if (id) {
      // const acc = await accountService.getBalance(id as string);
      return res.status(OK).json("ok");
    }
    return res.status(BAD_REQUEST).json("Token id is missing");
  },
);

export default router;
