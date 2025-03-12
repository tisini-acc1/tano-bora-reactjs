import { RouteObject } from "react-router";

import TanoBoraPage from "@/pages/tanobora/TanoBoraPage";
import ProtectedLayout from "@/layouts/ProtectedLayout";

const tanoboraRoutes = [
  {
    path: "/:firm",
    element: <ProtectedLayout />,
    children: [{ path: "/:firm", element: <TanoBoraPage /> }],
  },
] satisfies RouteObject[];

export default tanoboraRoutes;
