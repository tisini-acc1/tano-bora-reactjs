import { createBrowserRouter, RouteObject } from "react-router";

import baseRoutes from "./base.routes";
import tanoboraRoutes from "./tanobora.routes";
import NotFound404 from "@/pages/error/NotFound404";
import MainLayout from "@/layouts/MainLayout";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [...baseRoutes, ...tanoboraRoutes],
  },
  {
    path: "*",
    element: <NotFound404 />,
  },
] satisfies RouteObject[];

const router = createBrowserRouter(routes);

export default router;
