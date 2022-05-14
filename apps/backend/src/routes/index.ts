import { Router } from "express";
import metadataRouter from "./Metadata.router";
import nftRouter from "./Nft.router";

const baseRouter = Router();

// Setup routers
baseRouter.use("", metadataRouter);
baseRouter.use("", nftRouter);

export default baseRouter;
