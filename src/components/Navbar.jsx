import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">FindLabz</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-8 items-center">
            <Link to="/labs" className="text-gray-700 hover:text-blue-600">Find Labs</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
            <Link to="/news" className="text-gray-700 hover:text-blue-600">News</Link>
            <Link to="/compliance" className="text-gray-700 hover:text-blue-600">Compliance</Link>
            <Link to="/accreditation" className="text-gray-700 hover:text-blue-600">Accreditation</Link>
            <Link to="/forms" className="text-gray-700 hover:text-blue-600">Forms</Link>
            <Link to="/events" className="text-gray-700 hover:text-blue-600">Events</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
