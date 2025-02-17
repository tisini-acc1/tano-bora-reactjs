import { Outlet } from "react-router";

import Footer from "@/components/site/Footer";
import MainNavBar from "@/components/site/MainNavBar";

const MainLayout = () => {
  return (
    <div className="container">
      <MainNavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
