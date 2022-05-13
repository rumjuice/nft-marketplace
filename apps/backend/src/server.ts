import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import StatusCodes from "http-status-codes";
import path from "path";

// Initialize express
const app = express();

//#region Middleware
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//#endregion

//#region API routes
// app.use('', apiRouter);

// Error handling
app.use((err: Error, _: Request, res: Response) => {
  console.error(err, true);

  return res.status(StatusCodes.BAD_REQUEST).json({
    error: err.message,
  });
});
//#endregion

//#region Static file
// TODO serve image
const viewsDir = path.join(__dirname, "views");
app.set("views", viewsDir);

const staticDir = path.join(__dirname, "public");
app.use(express.static(staticDir));

app.get("*", (_: Request, res: Response) => {
  res.sendFile("index.html", { root: viewsDir });
});
//#endregion

export default app;
