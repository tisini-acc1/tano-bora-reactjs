import { RouteObject } from "react-router";

import HomePage from "@/pages/home/HomePage";
import MainLayout from "@/layouts/MainLayout";

const baseRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
] satisfies RouteObject[];

export default baseRoutes;
