// import { Search } from "lucide-react";

import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <Link to={"/"}>
        <img src="Tisini.png" alt="" className="w-20" />
      </Link>

      <div className="hidden md:block">
        {/* <Search className="text-gray-400" /> */}
        <input
          placeholder="Search Tano Bora"
          className="border w-[240px] rounded-full p-2 cursor-pointer hover:bg-gray-50"
        />
      </div>

      <button className="primary-btn">Play</button>
    </nav>
  );
};

export default NavBar;
