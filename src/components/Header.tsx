
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-healthcare-primary text-white py-2">
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
          <Link to="/" onClick={handleLinkClick} className="text-2xl font-bold text-healthcare-primary hover:text-healthcare-secondary transition-colors">
            Noelle & Philips<br />
            <span className="text-lg text-healthcare-secondary">Home Healthcare LLC</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/"
              onClick={handleLinkClick}
              className={`font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'text-healthcare-primary border-b-2 border-healthcare-primary' 
                  : 'text-healthcare-neutral hover:text-healthcare-primary hover:border-b-2 hover:border-healthcare-secondary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services"
              onClick={handleLinkClick}
              className={`font-medium transition-all duration-300 ${
                isActive('/services') 
                  ? 'text-healthcare-primary border-b-2 border-healthcare-primary' 
                  : 'text-healthcare-neutral hover:text-healthcare-primary hover:border-b-2 hover:border-healthcare-secondary'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/about"
              onClick={handleLinkClick}
              className={`font-medium transition-all duration-300 ${
                isActive('/about') 
                  ? 'text-healthcare-primary border-b-2 border-healthcare-primary' 
                  : 'text-healthcare-neutral hover:text-healthcare-primary hover:border-b-2 hover:border-healthcare-secondary'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/contact"
              onClick={handleLinkClick}
              className={`font-medium transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-healthcare-primary border-b-2 border-healthcare-primary' 
                  : 'text-healthcare-neutral hover:text-healthcare-primary hover:border-b-2 hover:border-healthcare-secondary'
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
                onClick={handleLinkClick}
                className={`font-medium text-left transition-colors ${
                  isActive('/') ? 'text-healthcare-primary' : 'text-healthcare-neutral hover:text-healthcare-primary'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/services"
                onClick={handleLinkClick}
                className={`font-medium text-left transition-colors ${
                  isActive('/services') ? 'text-healthcare-primary' : 'text-healthcare-neutral hover:text-healthcare-primary'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/about"
                onClick={handleLinkClick}
                className={`font-medium text-left transition-colors ${
                  isActive('/about') ? 'text-healthcare-primary' : 'text-healthcare-neutral hover:text-healthcare-primary'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/contact"
                onClick={handleLinkClick}
                className={`font-medium text-left transition-colors ${
                  isActive('/contact') ? 'text-healthcare-primary' : 'text-healthcare-neutral hover:text-healthcare-primary'
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

