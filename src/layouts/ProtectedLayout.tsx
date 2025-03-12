import { Outlet } from "react-router";

import Footer from "@/components/site/Footer";
import NavBar from "@/components/site/NavBar";
import { useThemeSync } from "@/hooks/useTheme";

const ProtectedLayout = () => {
  useThemeSync();

  return (
    <div className="">
      <NavBar />
      <div className="container pt-24 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default ProtectedLayout;
