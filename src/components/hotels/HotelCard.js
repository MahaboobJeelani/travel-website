import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../redux/actions/favoriteActions';
import { formatCurrency } from '../../utils/helpers';

const HotelCard = ({ hotel }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);
  const isFavorite = favorites.some(fav => fav.hotelId === hotel.hotelId);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isFavorite) {
      dispatch(removeFromFavorites(hotel.hotelId));
    } else {
      dispatch(addToFavorites(hotel));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 group">
      {/* Hotel Image */}
      <div className="relative overflow-hidden">
        <img
          src={hotel.images && hotel.images[0] ? hotel.images[0] : 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400'}
          alt={hotel.name}
          className="w-full h-48 object-cover transition duration-300 group-hover:scale-110"
        />
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-3 right-3 p-2 rounded-full transition duration-300 transform hover:scale-110 ${
            isFavorite 
              ? 'bg-red-500 text-white shadow-lg' 
              : 'bg-white text-gray-400 hover:text-red-500'
          }`}
        >
          <FaHeart className={isFavorite ? 'fill-current' : ''} />
        </button>
        
        {/* Rating Badge */}
        <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
          <FaStar className="text-yellow-400 mr-1" />
          <span>{hotel.rating || '4.5'}</span>
        </div>
      </div>

      {/* Hotel Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition duration-300">
            {hotel.name}
          </h3>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <FaMapMarkerAlt className="mr-1 text-blue-500" />
          <span className="text-sm">{hotel.city || 'Unknown City'}, {hotel.countryCode}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {hotel.description || 'Experience luxury and comfort in this beautiful hotel with premium amenities and excellent service.'}
        </p>

        {/* Amenities */}
        {hotel.amenities && hotel.amenities.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {hotel.amenities.slice(0, 3).map((amenity, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
              >
                {amenity}
              </span>
            ))}
            {hotel.amenities.length > 3 && (
              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                +{hotel.amenities.length - 3} more
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-blue-600">
              {formatCurrency(hotel.price || 150)}
            </span>
            <span className="text-gray-600 text-sm"> / night</span>
            {hotel.reviewCount && (
              <p className="text-gray-500 text-sm mt-1">
                {hotel.reviewCount} reviews
              </p>
            )}
          </div>
          <Link
            to={`/hotel/${hotel.hotelId}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300 transform hover:scale-105"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;