import { RouteObject } from "react-router";

import TanoBoraPage from "@/pages/tanobora/TanoBoraPage";
import ProtectedLayout from "@/layouts/ProtectedLayout";

const tanoboraRoutes = [
  {
    path: "/tanobora",
    element: <ProtectedLayout />,
    children: [{ path: "/tanobora", element: <TanoBoraPage /> }],
  },
] satisfies RouteObject[];

export default tanoboraRoutes;
