import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHeart, FaCompass, FaBlog, FaBars, FaTimes } from 'react-icons/fa';
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
    return location.pathname === path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600';
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="w-10 h-10 flex items-center justify-center">
              {/* <FaCompass className="text-white text-xl" /> */}
              <img src="https://images.unsplash.com/vector-1762840398301-90e4aa10d49c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" alt="TripNest Logo"/>
            </div>
            <span className="text-2xl font-bold text-gray-800">TripNest</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition duration-300 ${isActive('/')}`}
            >
              Home
            </Link>
            <Link 
              to="/hotels" 
              className={`font-medium transition duration-300 ${isActive('/hotels')}`}
            >
              Hotels
            </Link>
            <Link 
              to="/blogs" 
              className={`font-medium transition duration-300 ${isActive('/blogs')}`}
            >
              Blogs
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition duration-300 ${isActive('/about')}`}
            >
              About
            </Link>
          </nav>

          {/* Favorites Icon */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/favorites" 
              className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaHeart className="text-red-500" />
              <span className="text-gray-700 font-medium hidden sm:block">
                Favorites ({favorites.length})
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link 
                to="/" 
                className={`font-medium transition duration-300 ${isActive('/')}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/hotels" 
                className={`font-medium transition duration-300 ${isActive('/hotels')}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hotels
              </Link>
              <Link 
                to="/blogs" 
                className={`font-medium transition duration-300 ${isActive('/blogs')}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link 
                to="/about" 
                className={`font-medium transition duration-300 ${isActive('/about')}`}
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