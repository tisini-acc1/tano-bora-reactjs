import { Outlet } from "react-router";

import Footer from "@/components/site/Footer";
import NavBar from "@/components/site/NavBar";

const MainLayout = () => {
  return (
    <body className="container">
      <NavBar />
      <Outlet />
      <Footer />
    </body>
  );
};

export default MainLayout;
