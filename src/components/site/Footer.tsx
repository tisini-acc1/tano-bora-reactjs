import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 p-4">
      <div className="container flex flex-col items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div>
            {/* <h1 className="text-2xl md:text-4xl font-handrawn">Tano Bora</h1> */}
            <img src="tanobora.png" alt="" className="w-28" />
          </div>
          <span>By</span>
          <Link to={"/"} className="">
            <img src="Tisini.png" alt="" className="w-28" />
          </Link>
        </div>

        <p className="font-handrawn text-2xl md:text-4xl">Math and Chance</p>

        <div className="w-full flex items-center justify-center">
          <p>© {currentYear} Tisini. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
