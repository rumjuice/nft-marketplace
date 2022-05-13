import { Router } from "express";
import metadataRouter from "./Metadata.router";

const baseRouter = Router();

// Setup routers
baseRouter.use("", metadataRouter);
// baseRouter.use("/transaction", transactionRouter);

export default baseRouter;
