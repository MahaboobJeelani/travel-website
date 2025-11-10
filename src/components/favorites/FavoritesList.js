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
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">❤️</div>
        <h3 className="text-2xl font-semibold text-gray-600 mb-2">
          No Favorite Hotels
        </h3>
        <p className="text-gray-500 mb-6">
          You haven't added any hotels to your favorites yet.
        </p>
        <Link
          to="/hotels"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
        >
          Explore Hotels
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {favorites.map((hotel) => (
        <div key={hotel.hotelId} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
          {/* Hotel Image */}
          <div className="relative">
            <img
              src={hotel.images && hotel.images[0] ? hotel.images[0] : 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400'}
              alt={hotel.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
              <FaStar className="text-yellow-400 mr-1" />
              <span>{hotel.rating || '4.5'}</span>
            </div>
            <button
              onClick={() => handleRemoveFavorite(hotel.hotelId)}
              className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-300 transform hover:scale-110"
            >
              <FaTrash size={14} />
            </button>
          </div>

          {/* Hotel Info */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">
              {hotel.name}
            </h3>

            <div className="flex items-center text-gray-600 mb-3">
              <FaMapMarkerAlt className="mr-1 text-blue-500" />
              <span className="text-sm">{hotel.city || 'Unknown City'}, {hotel.countryCode}</span>
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {hotel.description || 'Experience luxury and comfort in this beautiful hotel.'}
            </p>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold text-blue-600">
                  {formatCurrency(hotel.price || 150)}
                </span>
                <span className="text-gray-600 text-sm"> / night</span>
              </div>
              <Link
                to={`/hotel/${hotel.hotelId}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;