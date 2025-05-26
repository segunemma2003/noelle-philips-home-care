
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
              <Phone className="h-4 w-4" />
              <span>(972) 555-0123</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
              <Mail className="h-4 w-4" />
              <span>admin@noellephilips.com</span>
            </div>
          </div>
          <div className="text-sm">
            1217 Verheyden Dr, DeSoto, TX 75115
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
            Noelle & Philips<br />
            <span className="text-lg text-blue-600">Home Healthcare LLC</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/"
              className={`font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-300'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services"
              className={`font-medium transition-all duration-300 ${
                isActive('/services') 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-300'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/about"
              className={`font-medium transition-all duration-300 ${
                isActive('/about') 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-300'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/contact"
              className={`font-medium transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-300'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden hover:bg-gray-100 p-2 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium text-left transition-colors ${
                  isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium text-left transition-colors ${
                  isActive('/services') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium text-left transition-colors ${
                  isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium text-left transition-colors ${
                  isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
