import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaStar, FaMapMarkerAlt, FaArrowLeft, FaWifi, FaSwimmingPool, FaCar, FaUtensils, FaDumbbell, FaSpa } from 'react-icons/fa';
import { getHotelDetail } from '../redux/actions/hotelActions';
import { addToFavorites, removeFromFavorites } from '../redux/actions/favoriteActions';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { formatCurrency } from '../utils/helpers';

const HotelDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { hotelDetail, loading, error } = useSelector(state => state.hotels);
  const favorites = useSelector(state => state.favorites.items);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const isFavorite = favorites.some(fav => fav.hotelId === id);

  useEffect(() => {
    if (id) {
      dispatch(getHotelDetail(id));
    }
  }, [id, dispatch]);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else if (hotelDetail) {
      dispatch(addToFavorites(hotelDetail));
    }
  };

  const getAmenityIcon = (amenity) => {
    const amenityIcons = {
      'wifi': FaWifi,
      'pool': FaSwimmingPool,
      'parking': FaCar,
      'restaurant': FaUtensils,
      'fitness': FaDumbbell,
      'spa': FaSpa
    };

    for (const [key, icon] of Object.entries(amenityIcons)) {
      if (amenity.toLowerCase().includes(key)) {
        return icon;
      }
    }
    return FaWifi;
  };

  if (loading) {
    return <LoadingSpinner text="Loading hotel details..." />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Hotel</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!hotelDetail) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">🏨</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Hotel Not Found</h2>
          <p className="text-gray-600 mb-4">The hotel you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/hotels')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
          >
            Browse Hotels
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition duration-300"
          >
            <FaArrowLeft className="mr-2" />
            Back to Hotels
          </button>
        </div>
      </div>

      {/* Hotel Images */}
      <div className="relative h-96 bg-gray-200">
        {hotelDetail.images && hotelDetail.images.length > 0 ? (
          <>
            <img
              src={hotelDetail.images[currentImageIndex]}
              alt={hotelDetail.name}
              className="w-full h-full object-cover"
            />
            {/* Image Navigation */}
            {hotelDetail.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {hotelDetail.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition duration-300 ${
                      currentImageIndex === index ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-6xl">🏨</span>
          </div>
        )}
      </div>

      {/* Hotel Info */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {hotelDetail.name}
                </h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <FaMapMarkerAlt className="mr-2 text-blue-500" />
                  <span>{hotelDetail.address || `${hotelDetail.city}, ${hotelDetail.countryCode}`}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="font-semibold">{hotelDetail.rating || '4.5'}</span>
                  </div>
                  <span className="text-gray-600">
                    {hotelDetail.reviewCount || '427'} reviews
                  </span>
                </div>
              </div>
              <div className="mt-4 lg:mt-0 flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">
                    {formatCurrency(hotelDetail.price || 199)}
                  </div>
                  <div className="text-gray-600">per night</div>
                </div>
                <button
                  onClick={handleFavoriteClick}
                  className={`p-3 rounded-full transition duration-300 transform hover:scale-110 ${
                    isFavorite 
                      ? 'bg-red-500 text-white' 
                      : 'bg-gray-200 text-gray-600 hover:bg-red-500 hover:text-white'
                  }`}
                >
                  <FaHeart className={isFavorite ? 'fill-current' : ''} />
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {['overview', 'amenities', 'rooms', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-6 font-medium text-sm border-b-2 transition duration-300 ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Overview</h3>
                <p className="text-gray-600 leading-relaxed">
                  {hotelDetail.description}
                </p>
              </div>
            )}

            {activeTab === 'amenities' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {hotelDetail.amenities && hotelDetail.amenities.map((amenity, index) => {
                    const IconComponent = getAmenityIcon(amenity);
                    return (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <IconComponent className="text-blue-500" />
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'rooms' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Room Types</h3>
                <div className="space-y-4">
                  {hotelDetail.roomTypes && hotelDetail.roomTypes.map((room, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-800">{room.name}</h4>
                          <p className="text-gray-600 text-sm mt-1">{room.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-blue-600">
                            {formatCurrency(room.price)}
                          </div>
                          <div className="text-gray-600 text-sm">per night</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Guest Reviews</h3>
                <div className="space-y-6">
                  {hotelDetail.reviews && hotelDetail.reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="font-semibold text-blue-600">
                            {review.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{review.author}</h4>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <FaStar
                                  key={i}
                                  className={`${
                                    i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-gray-500 text-sm">
                              {new Date(review.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking CTA */}
          <div className="bg-blue-50 p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Ready to Book?</h3>
                <p className="text-gray-600">Experience the perfect stay at this amazing hotel</p>
              </div>
              <button className="mt-4 lg:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;