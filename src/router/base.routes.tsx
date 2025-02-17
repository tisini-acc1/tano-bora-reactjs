import HomePage from "@/pages/home/HomePage";
import { RouteObject } from "react-router";

const baseRoutes = [
  { path: "/", element: <HomePage /> },
] satisfies RouteObject[];

export default baseRoutes;
