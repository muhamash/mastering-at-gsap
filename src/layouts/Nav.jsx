import { Apple, Home, Info, User } from "lucide-react";
import { Link } from "react-router";

export default function StickyNavbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-rose-900 via-pink-800 to-purple-800 backdrop-blur-md bg-opacity-60 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-white drop-shadow-md">
            <User className="w-6 h-6" />
            <span className="font-bold text-lg">MyApp</span>
          </div>

          {/* Nav Links */}
          <div className="flex space-x-6">
            <Link
              to="/"
              className="flex items-center space-x-1 text-white/90 hover:text-white drop-shadow-sm transition"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link
              to="/agency"
              className="flex items-center space-x-1 text-white/90 hover:text-white drop-shadow-sm transition"
            >
              <Info className="w-5 h-5" />
              <span>Agency</span>
            </Link>
            <Link
              to="/projects"
              className="flex items-center space-x-1 text-white/90 hover:text-white drop-shadow-sm transition"
            >
              <Apple className="w-5 h-5" />
              <span>Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}