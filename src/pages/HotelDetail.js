import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaStar, FaMapMarkerAlt, FaArrowLeft, FaWifi, FaSwimmingPool, FaCar, FaUtensils, FaDumbbell, FaSpa, FaConciergeBell, FaSnowflake, FaTv, FaShower } from 'react-icons/fa';
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
      'wi-fi': FaWifi,
      'internet': FaWifi,
      'pool': FaSwimmingPool,
      'swimming': FaSwimmingPool,
      'parking': FaCar,
      'car': FaCar,
      'restaurant': FaUtensils,
      'dining': FaUtensils,
      'food': FaUtensils,
      'fitness': FaDumbbell,
      'gym': FaDumbbell,
      'exercise': FaDumbbell,
      'spa': FaSpa,
      'wellness': FaSpa,
      'massage': FaSpa,
      'concierge': FaConciergeBell,
      'bell': FaConciergeBell,
      'service': FaConciergeBell,
      'air conditioning': FaSnowflake,
      'ac': FaSnowflake,
      'tv': FaTv,
      'television': FaTv,
      'bath': FaShower,
      'shower': FaShower
    };

    const lowerAmenity = amenity.toLowerCase();
    for (const [key, icon] of Object.entries(amenityIcons)) {
      if (lowerAmenity.includes(key)) {
        return icon;
      }
    }
    return FaWifi;
  };

  const nextImage = () => {
    if (hotelDetail.images && hotelDetail.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === hotelDetail.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (hotelDetail.images && hotelDetail.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? hotelDetail.images.length - 1 : prev - 1
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner text="Loading hotel details..." size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Hotel</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
            >
              Go Back
            </button>
            <button
              onClick={() => navigate('/hotels')}
              className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
            >
              Browse Hotels
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!hotelDetail) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-gray-400 text-6xl mb-4">🏨</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Hotel Not Found</h2>
          <p className="text-gray-600 mb-4">The hotel you're looking for doesn't exist or may have been removed.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/hotels')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
            >
              Browse Hotels
            </button>
            <button
              onClick={() => navigate('/')}
              className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition duration-300 group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Hotels
          </button>
        </div>
      </div>

      {/* Hotel Images Carousel */}
      <div className="relative h-80 md:h-96 bg-gray-200 overflow-hidden">
        {hotelDetail.images && hotelDetail.images.length > 0 ? (
          <>
            <img
              src={hotelDetail.images[currentImageIndex]}
              alt={hotelDetail.name}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            
            {/* Image Navigation Arrows */}
            {hotelDetail.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition duration-300"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition duration-300"
                >
                  <FaArrowLeft className="rotate-180" />
                </button>
              </>
            )}
            
            {/* Image Indicators */}
            {hotelDetail.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {hotelDetail.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition duration-300 ${
                      currentImageIndex === index 
                        ? 'bg-white' 
                        : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {hotelDetail.images.length}
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <div className="text-center">
              <span className="text-6xl mb-2 block">🏨</span>
              <p className="text-lg">No images available</p>
            </div>
          </div>
        )}
      </div>

      {/* Hotel Information */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {hotelDetail.name}
                </h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <FaMapMarkerAlt className="mr-2 text-blue-500 flex-shrink-0" />
                  <span className="truncate">
                    {hotelDetail.address || `${hotelDetail.city}, ${hotelDetail.countryCode}`}
                  </span>
                </div>
                <div className="flex items-center space-x-4 flex-wrap gap-2">
                  <div className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="font-semibold">{hotelDetail.rating || '4.5'}</span>
                  </div>
                  <span className="text-gray-600">
                    {hotelDetail.reviewCount || '427'} reviews
                  </span>
                  {hotelDetail.roomTypes && hotelDetail.roomTypes.length > 0 && (
                    <span className="text-gray-600">
                      {hotelDetail.roomTypes.length} room types
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-4 lg:mt-0 flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">
                    {formatCurrency(hotelDetail.price || 199)}
                  </div>
                  <div className="text-gray-600 text-sm">per night</div>
                </div>
                <button
                  onClick={handleFavoriteClick}
                  className={`p-3 rounded-full transition duration-300 transform hover:scale-110 ${
                    isFavorite 
                      ? 'bg-red-500 text-white shadow-lg' 
                      : 'bg-gray-200 text-gray-600 hover:bg-red-500 hover:text-white'
                  }`}
                  title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <FaHeart className={isFavorite ? 'fill-current' : ''} size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex overflow-x-auto -mb-px">
              {['overview', 'amenities', 'rooms', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-6 font-medium text-sm border-b-2 transition duration-300 whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {hotelDetail.description || 'No description available for this hotel.'}
                  </p>
                </div>
                
                {/* Quick Facts */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {hotelDetail.rating || '4.5'}/5
                    </div>
                    <div className="text-gray-600 text-sm">Guest Rating</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {hotelDetail.reviewCount || '427'}+
                    </div>
                    <div className="text-gray-600 text-sm">Reviews</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {hotelDetail.amenities ? hotelDetail.amenities.length : '15'}+
                    </div>
                    <div className="text-gray-600 text-sm">Amenities</div>
                  </div>
                </div>
              </div>
            )}

            {/* Amenities Tab */}
            {activeTab === 'amenities' && (
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Amenities & Services</h3>
                {hotelDetail.amenities && hotelDetail.amenities.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {hotelDetail.amenities.map((amenity, index) => {
                      const IconComponent = getAmenityIcon(amenity);
                      return (
                        <div 
                          key={index} 
                          className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300"
                        >
                          <IconComponent className="text-blue-500 text-lg flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-gray-400 text-4xl mb-3">🏊</div>
                    <p className="text-gray-600">No amenities information available</p>
                  </div>
                )}
              </div>
            )}

            {/* Rooms Tab */}
            {activeTab === 'rooms' && (
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Room Types</h3>
                {hotelDetail.roomTypes && hotelDetail.roomTypes.length > 0 ? (
                  <div className="space-y-6">
                    {hotelDetail.roomTypes.map((room, index) => (
                      <div 
                        key={index} 
                        className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition duration-300"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">{room.name}</h4>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {room.description || 'Comfortable and well-appointed room with all necessary amenities for a pleasant stay.'}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {room.features && room.features.map((feature, featureIndex) => (
                                <span 
                                  key={featureIndex}
                                  className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="mt-4 lg:mt-0 lg:ml-6 lg:text-right">
                            <div className="text-2xl font-bold text-blue-600 mb-1">
                              {formatCurrency(room.price)}
                            </div>
                            <div className="text-gray-600 text-sm mb-3">per night</div>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 w-full lg:w-auto">
                              Select Room
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-gray-400 text-4xl mb-3">🛏️</div>
                    <p className="text-gray-600">No room information available</p>
                  </div>
                )}
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Guest Reviews</h3>
                {hotelDetail.reviews && hotelDetail.reviews.length > 0 ? (
                  <div className="space-y-6">
                    {hotelDetail.reviews.map((review, index) => (
                      <div 
                        key={index} 
                        className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
                      >
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="font-semibold text-blue-600 text-lg">
                              {review.author.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                              <h4 className="font-semibold text-gray-800 text-lg">{review.author}</h4>
                              <span className="text-gray-500 text-sm mt-1 sm:mt-0">
                                {new Date(review.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2 mb-3">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <FaStar
                                    key={i}
                                    className={`${
                                      i < review.rating 
                                        ? 'text-yellow-400 fill-current' 
                                        : 'text-gray-300'
                                    } text-sm`}
                                  />
                                ))}
                              </div>
                              <span className="text-gray-600 text-sm">
                                {review.rating}.0/5.0
                              </span>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                              {review.comment}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-gray-400 text-4xl mb-3">⭐</div>
                    <p className="text-gray-600">No reviews available yet</p>
                    <p className="text-gray-500 text-sm mt-2">
                      Be the first to review this hotel!
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Booking Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="text-white mb-4 lg:mb-0">
                <h3 className="text-2xl font-bold mb-2">Ready to Book Your Stay?</h3>
                <p className="text-blue-100">
                  Experience the perfect blend of comfort and luxury at this amazing hotel
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                  Book Now
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg transition duration-300">
                  Contact Hotel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;