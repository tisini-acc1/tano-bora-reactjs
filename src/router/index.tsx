import { createBrowserRouter, Outlet, RouteObject } from "react-router";

import baseRoutes from "./base.routes";
import tanoboraRoutes from "./tanobora.routes";
import NotFound404 from "@/pages/error/NotFound404";

const routes = [
  {
    path: "/",
    element: <Outlet />,
    children: [...baseRoutes, ...tanoboraRoutes],
  },
  {
    path: "/404",
    element: <NotFound404 />,
  },
  {
    path: "*",
    element: <NotFound404 />,
  },
] satisfies RouteObject[];

const router = createBrowserRouter(routes);

export default router;
