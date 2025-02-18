import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

import Button from "../ui/Button";
import { navItems } from "@/lib/data";

const HeroHeader = ({ colorDeep }: { colorDeep: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex lg:items-center lg:justify-between lg:flex-row lg:gap-0 w-full  md:px-16 flex-col gap-4 px-4 py-1">
      <div className="flex flex-row items-center justify-between lg:w-auto">
        <div className="flex justify-center items-center h-20 p-1">
          <Link
            to={"/"}
            className="text-2xl md:text-4xl font-handrawn font-semibold text-primary"
          >
            {/* <img src="Tisini.png" alt="" className="w-20" /> */}
            Tano Bora
          </Link>
        </div>

        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="text-4xl text-primary" />
          ) : (
            <Menu className="text-4xl text-primary" />
          )}
        </button>
      </div>

      <nav
        className={`flex lg:items-center lg:justify-end lg:flex-row lg:pb-0 pb-4 flex-col gap-4 origin-top duration-300 ${
          open
            ? "h-full scale-y-1"
            : "h-0 transform lg:transform-none scale-y-0"
        }`}
      >
        <ul className="flex flex-col justify-center gap-4 lg:flex-row lg:items-center lg:gap-0 font-semibold">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`lg:px-4 md:text-base bg-transparent lg:ml-4 mt-2 text-sm hover:text-gray-900 focus:outline-none`}
            >
              <Link to={item.link} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button
          text="Play Now"
          className={"px-10 py-3 md:text-base text-center bg-primary text-sm"}
          onClick={() => setOpen(false)}
          type={"button"}
          style={{ backgroundColor: `${colorDeep}` }}
        />
      </nav>
    </header>
  );
};

export default HeroHeader;
