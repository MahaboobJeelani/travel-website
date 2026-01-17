import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites } from '../../redux/actions/favoriteActions';
import { FaHeart, FaStar, FaMapMarkerAlt, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';

const FavoritesList = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);

  const handleRemoveFavorite = (hotelId) => {
    dispatch(removeFromFavorites(hotelId));
  };

  if (favorites.length === 0) {
    return (
      <div className="max-w-md mx-auto text-center py-16">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#D8CFC4]/30 mb-6">
          <FaHeart className="text-4xl text-[#3A3A3A]/40" />
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-serif font-semibold text-[#3A3A3A] mb-4">
            No Favorite Hotels
          </h3>
          <div className="h-px w-16 bg-[#C8A24A] mx-auto mb-6"></div>
          <p className="text-[#3A3A3A]/70 leading-relaxed font-light mb-8">
            You haven't added any hotels to your favorites yet.
          </p>
          <Link
            to="/hotels"
            className="inline-flex items-center gap-2 bg-[#3A3A3A] hover:bg-[#3A3A3A]/90 text-white font-medium py-3.5 px-8 rounded-full transition-all duration-300 hover:shadow-lg"
          >
            <span>Explore Hotels</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {favorites.map((hotel) => (
        <div key={hotel.hotelId} className="group relative">
          {/* Card Container */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-[#3A3A3A]/10 hover:border-[#C8A24A]/30 transition-all duration-500 hover:shadow-lg">
            
            {/* Hotel Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={hotel.images && hotel.images[0] ? hotel.images[0] : 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400'}
                alt={hotel.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A3A3A]/50 via-transparent to-transparent"></div>
              
              {/* Rating Badge */}
              <div className="absolute top-4 left-4 flex items-center bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <FaStar className="text-[#C8A24A] mr-1.5" size={14} />
                <span className="text-sm font-medium text-[#3A3A3A]">{hotel.rating || '4.5'}</span>
              </div>
              
              {/* Remove Button */}
              <button
                onClick={() => handleRemoveFavorite(hotel.hotelId)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#3A3A3A]/60 hover:text-[#C8A24A] p-2.5 rounded-full transition-all duration-300 hover:bg-white"
                aria-label="Remove from favorites"
              >
                <FaTrash size={16} />
              </button>
              
              {/* Price Overlay */}
              <div className="absolute bottom-4 left-4">
                <div className="text-2xl font-serif font-bold text-white">
                  {formatCurrency(hotel.price || 150)}
                </div>
                <div className="text-sm text-white/80 font-light">per night</div>
              </div>
            </div>

            {/* Hotel Info */}
            <div className="p-6">
              {/* Hotel Name */}
              <Link to={`/hotel/${hotel.hotelId}`}>
                <h3 className="text-xl font-serif font-semibold text-[#3A3A3A] mb-3 line-clamp-1 hover:text-[#C8A24A] transition-colors duration-300">
                  {hotel.name}
                </h3>
              </Link>

              {/* Location */}
              <div className="flex items-center text-[#3A3A3A]/70 mb-4">
                <FaMapMarkerAlt className="mr-3 text-[#C8A24A] flex-shrink-0" />
                <span className="text-sm font-light truncate">
                  {hotel.city || 'Unknown City'}, {hotel.countryCode}
                </span>
              </div>

              {/* Description */}
              <p className="text-[#3A3A3A]/60 text-sm mb-6 leading-relaxed line-clamp-2 font-light">
                {hotel.description || 'Experience luxury and comfort in this beautiful hotel.'}
              </p>

              {/* Action Button */}
              <div className="pt-5 border-t border-[#3A3A3A]/5">
                <Link
                  to={`/hotel/${hotel.hotelId}`}
                  className="w-full flex items-center justify-center gap-2 text-[#3A3A3A] hover:text-[#C8A24A] font-medium py-2.5 px-4 rounded-lg hover:bg-[#F5F2EE] transition-all duration-300 group/link"
                >
                  <span>View Details</span>
                  <svg 
                    className="w-4 h-4 transform transition-transform duration-300 group-hover/link:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Hover Border Effect */}
          <div className="absolute inset-0 border border-transparent group-hover:border-[#C8A24A]/20 rounded-xl pointer-events-none transition-all duration-500"></div>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;