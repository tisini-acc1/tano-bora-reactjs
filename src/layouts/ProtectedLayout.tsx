import Footer from "@/components/site/Footer";
import NavBar from "@/components/site/NavBar";
import { Outlet } from "react-router";

const ProtectedLayout = () => {
  return (
    <div className="container">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ProtectedLayout;
