import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white p-4">
      <div className="container flex flex-col items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-2xl md:text-4xl font-handrawn">Tano Bora</h1>
          </div>
          <span>By</span>
          <Link to={"/"} className="">
            <img src="Tisini.png" alt="" className="w-28" />
          </Link>
        </div>

        <p className="text-gray-50">Math and Chance</p>

        <div className="w-full flex items-center justify-center">
          <p>© {currentYear} Tisini. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
