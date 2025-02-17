import { Outlet } from "react-router";

import Footer from "@/components/site/Footer";
import NavBar from "@/components/site/NavBar";

const ProtectedLayout = () => {
  return (
    <div>
      <div className="container">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default ProtectedLayout;
