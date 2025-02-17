import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const MenuItems = [
  { id: 1, title: "Play", link: "/tanobora" },
  { id: 2, title: "About", link: "/about" },
];

const MainNavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center p-4 relative">
        <Link to={"/"}>
          <img src="Tisini.png" alt="" className="w-20" />
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <ul className="flex gap-4">
            {MenuItems.map((item) => (
              <li
                key={item.id}
                className="font-semibold py-2 px-4 rounded-md hover:scale-110 duration-300"
              >
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>

          <button className="primary-btn">Contact Us</button>
        </div>

        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <Menu className="text-4xl" />
        </div>
      </nav>

      <MobileNav open={open} setOpen={setOpen} />
    </>
  );
};

const MobileNav = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) => {
  return (
    <div className="absolute top-16 left-0 w-full h-screen z-20">
      {open && (
        <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-xl">
          <ul className="flex flex-col items-center justify-center gap-10">
            {MenuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  onClick={() => setOpen(!open)}
                  className="inline-block py-1 px-3 font-semibold hover:text-black"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <button
              onClick={() => setOpen(!open)}
              className="py-1 px-3 hover:text-black"
            >
              Contact Us
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MainNavBar;
