import { Outlet } from "react-router";

import Footer from "@/components/site/Footer";
import NavBar from "@/components/site/NavBar";
import { useThemeSync } from "@/hooks/useTheme";

const ProtectedLayout = () => {
  useThemeSync();

  return (
    <div>
      <div className="">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default ProtectedLayout;
