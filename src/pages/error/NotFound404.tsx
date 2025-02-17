import { Frown } from "lucide-react";
import { Link } from "react-router";

const NotFound404 = () => {
  return (
    <main className="space-y-8 flex items-center justify-center flex-col h-screen bg-red-300">
      <Frown color="#a71b11" className="w-20 h-20" />
      <h1 className="text-6xl font-bold text-gray-800">404</h1>

      <h2 className="font-bold text-gray-600 text-2xl">
        Ooops, Page Not Found!
      </h2>

      <p className="text-gray-600">
        Sorry, we couldn't find the page you're looking for.
      </p>

      <div>
        <Link
          to="/"
          className="px-4 py-2 bg-gray-800 text-gray-100 rounded hover:bg-gray-700"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
};

export default NotFound404;
