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
    <div className="group relative">
      {/* Card Container */}
      <div className="bg-white rounded-xl overflow-hidden border border-[#3A3A3A]/10 hover:shadow-lg transition-all duration-500">

        {/* Image Section with Overlay */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={hotel.images && hotel.images[0] ? hotel.images[0] : 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400'}
            alt={hotel.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Dark Overlay for Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3A3A3A]/80 via-transparent to-transparent opacity-40"></div>

          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex items-center gap-3">
            <div className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <FaStar className="text-[#C8A24A] mr-1.5" size={14} />
              <span className="text-sm font-medium text-[#3A3A3A]">{hotel.rating || '4.5'}</span>
            </div>

            {hotel.reviewCount && (
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="text-sm font-light text-[#3A3A3A]/70">{hotel.reviewCount} reviews</span>
              </div>
            )}
          </div>

          {/* Favorite Button */}
          <button
            onClick={handleFavoriteClick}
            className={`absolute top-4 right-4 p-2.5 rounded-full transition-all duration-300 ${isFavorite
                ? 'bg-[#C8A24A] text-white shadow-md'
                : 'bg-white/90 text-[#3A3A3A]/50 hover:bg-[#C8A24A] hover:text-white'
              }`}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <FaHeart className={isFavorite ? 'fill-current' : ''} size={16} />
          </button>

          {/* Price Overlay */}
          <div className="absolute bottom-4 left-4">
            <div className="text-2xl font-serif font-bold text-white">
              {formatCurrency(hotel.price || 150)}
            </div>
            <div className="text-sm text-white/80 font-light">per night</div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Location */}
          <div className="flex items-center mb-3">
            <FaMapMarkerAlt className="text-[#C8A24A] mr-2 flex-shrink-0" />
            <span className="text-sm text-[#3A3A3A]/70 truncate">
              {hotel.city || 'Unknown City'}, {hotel.countryCode}
            </span>
          </div>

          {/* Hotel Name */}
          <Link to={`/hotel/${hotel.hotelId}`}>
            <h3 className="text-xl font-medium text-[#3A3A3A] mb-3 line-clamp-2 hover:text-[#C8A24A] transition-colors duration-300 leading-tight">
              {hotel.name}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-[#3A3A3A]/60 text-sm mb-5 leading-relaxed line-clamp-2 font-light">
            {hotel.description || 'Experience luxury and comfort in this beautiful hotel with premium amenities and excellent service.'}
          </p>

          {/* Amenities */}
          {hotel.amenities && hotel.amenities.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {hotel.amenities.slice(0, 2).map((amenity, index) => (
                  <span
                    key={index}
                    className="bg-[#F5F2EE] text-[#3A3A3A]/80 text-xs px-3 py-1.5 rounded-full"
                  >
                    {amenity}
                  </span>
                ))}
                {hotel.amenities.length > 2 && (
                  <span className="bg-[#F5F2EE] text-[#3A3A3A]/60 text-xs px-3 py-1.5 rounded-full">
                    +{hotel.amenities.length - 2} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* View Details Button */}
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
  );
};

export default HotelCard;