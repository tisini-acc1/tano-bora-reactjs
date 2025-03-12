// import { Search } from "lucide-react";

import { useStore } from "@/store/store";
import { Link } from "react-router";

const NavBar = () => {
  const org = useStore((state) => state.store.organization);

  if (!org || !org.name) {
    return <div>Loading...</div>;
  }

  return (
    <nav className="fixed w-full bg-gray-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link
          to={"/"}
          className="text-2xl md:text-4xl font-handrawn font-semibold text-primary"
        >
          {/* <img src={org.logo} alt="" className="w-20" /> */}
          {org.name}
        </Link>

        <div className="hidden md:block">
          {/* <Search className="text-gray-400" /> */}
          <input
            placeholder="Search Tano Bora"
            className="border w-[240px] rounded-full p-2 cursor-pointer hover:bg-gray-50"
          />
        </div>

        <button className="primary-btn">Log in</button>
      </div>
    </nav>
  );
};

export default NavBar;
