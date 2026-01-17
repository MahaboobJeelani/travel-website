import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { loadFavorites } from '../../redux/actions/favoriteActions';

const Header = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch]);

  const isActive = (path) => {
    return location.pathname === path ? 'text-[#C8A24A]' : 'text-[#3A3A3A]';
  };

  return (
    <header className="bg-[#D8CFC4] border-b border-[#3A3A3A]/10 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden rounded-lg border border-[#3A3A3A]/10 bg-white shadow-sm transition-all duration-300 group-hover:shadow-md">
              <img 
                src="https://images.unsplash.com/vector-1762840398301-90e4aa10d49c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" 
                alt="TripNest Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-serif font-bold text-[#3A3A3A] tracking-tight">
              TripNest
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link 
              to="/" 
              className={`font-medium text-lg transition-all duration-300 ${isActive('/')} relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C8A24A] after:transition-all after:duration-300 ${location.pathname === '/' ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
            >
              Home
            </Link>
            <Link 
              to="/hotels" 
              className={`font-medium text-lg transition-all duration-300 ${isActive('/hotels')} relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C8A24A] after:transition-all after:duration-300 ${location.pathname === '/hotels' ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
            >
              Hotels
            </Link>
            <Link 
              to="/blogs" 
              className={`font-medium text-lg transition-all duration-300 ${isActive('/blogs')} relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C8A24A] after:transition-all after:duration-300 ${location.pathname === '/blogs' ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
            >
              Blogs
            </Link>
            <Link 
              to="/about" 
              className={`font-medium text-lg transition-all duration-300 ${isActive('/about')} relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C8A24A] after:transition-all after:duration-300 ${location.pathname === '/about' ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
            >
              About
            </Link>
          </nav>

          {/* Favorites Icon */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/favorites" 
              className="flex items-center space-x-3 px-5 py-2.5 rounded-lg border border-[#3A3A3A]/20 bg-white shadow-sm hover:shadow-md transition-all duration-300 group relative"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative">
                <FaHeart className="text-[#C8A24A] text-lg" />
                {favorites.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#3A3A3A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </div>
              <span className="text-[#3A3A3A] font-medium hidden sm:block text-lg">
                Favorites
              </span>
              <div className="absolute inset-0 rounded-lg border border-[#C8A24A]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#3A3A3A] p-2 rounded-lg border border-[#3A3A3A]/20 hover:bg-white/50 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pt-6 pb-2 border-t border-[#3A3A3A]/20 animate-fade-in">
            <nav className="flex flex-col space-y-5">
              <Link 
                to="/" 
                className={`font-medium text-lg py-3 px-4 rounded-lg transition-all duration-300 ${isActive('/')} ${location.pathname === '/' ? 'bg-white/50 border-l-4 border-[#C8A24A] pl-3' : 'hover:bg-white/30'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/hotels" 
                className={`font-medium text-lg py-3 px-4 rounded-lg transition-all duration-300 ${isActive('/hotels')} ${location.pathname === '/hotels' ? 'bg-white/50 border-l-4 border-[#C8A24A] pl-3' : 'hover:bg-white/30'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hotels
              </Link>
              <Link 
                to="/blogs" 
                className={`font-medium text-lg py-3 px-4 rounded-lg transition-all duration-300 ${isActive('/blogs')} ${location.pathname === '/blogs' ? 'bg-white/50 border-l-4 border-[#C8A24A] pl-3' : 'hover:bg-white/30'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link 
                to="/about" 
                className={`font-medium text-lg py-3 px-4 rounded-lg transition-all duration-300 ${isActive('/about')} ${location.pathname === '/about' ? 'bg-white/50 border-l-4 border-[#C8A24A] pl-3' : 'hover:bg-white/30'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;