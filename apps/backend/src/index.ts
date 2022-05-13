import dotenv from "dotenv";
import server from "./server";

dotenv.config();

const message = "Express server started on port: ",
  port = process.env.PORT || 3000;

// Start api server
server.listen(port, () => {
  console.log(message + port);
});