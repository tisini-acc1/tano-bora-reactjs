import { RouteObject } from "react-router";

import TanoBoraPage from "@/pages/tanobora/TanoBoraPage";

const tanoboraRoutes = [
  { path: "/tanobora", element: <TanoBoraPage /> },
] satisfies RouteObject[];

export default tanoboraRoutes;
