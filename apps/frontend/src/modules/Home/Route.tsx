import { RouteObject } from "react-router-dom";
import { Detail, List } from "./views";

const HomeRoutes: RouteObject[] = [
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/nft",
    element: <Detail />,
  },
];
export default HomeRoutes;
