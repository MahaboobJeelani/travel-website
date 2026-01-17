import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaStar, FaMapMarkerAlt, FaArrowLeft, FaWifi, FaSwimmingPool, FaCar, FaUtensils, FaDumbbell, FaSpa, FaConciergeBell, FaSnowflake, FaTv, FaShower } from 'react-icons/fa';
import { getHotelDetail } from '../redux/actions/hotelActions';
import { addToFavorites, removeFromFavorites } from '../redux/actions/favoriteActions';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { formatCurrency } from '../utils/helpers';
import toast from 'react-hot-toast';

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
    const amenityIcons = { 'wifi': FaWifi, 'wi-fi': FaWifi, 'internet': FaWifi, 'pool': FaSwimmingPool, 'swimming': FaSwimmingPool, 'parking': FaCar, 'car': FaCar, 'restaurant': FaUtensils, 'dining': FaUtensils, 'food': FaUtensils, 'fitness': FaDumbbell, 'gym': FaDumbbell, 'exercise': FaDumbbell, 'spa': FaSpa, 'wellness': FaSpa, 'massage': FaSpa, 'concierge': FaConciergeBell, 'bell': FaConciergeBell, 'service': FaConciergeBell, 'air conditioning': FaSnowflake, 'ac': FaSnowflake, 'tv': FaTv, 'television': FaTv, 'bath': FaShower, 'shower': FaShower };

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
      <div className="min-h-screen bg-[#F5F2EE] flex items-center justify-center">
        <LoadingSpinner text="Loading hotel details..." size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#F5F2EE] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#D8CFC4]/50 mb-6">
            <span className="text-4xl text-[#3A3A3A]/40">❌</span>
          </div>
          <h2 className="text-2xl font-serif font-semibold text-[#3A3A3A] mb-4">Error Loading Hotel</h2>
          <div className="h-px w-16 bg-[#C8A24A] mx-auto mb-6"></div>
          <p className="text-[#3A3A3A]/70 mb-8 leading-relaxed">{error}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="bg-[#3A3A3A] hover:bg-[#3A3A3A]/90 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
            >
              Go Back
            </button>
            <button
              onClick={() => navigate('/hotels')}
              className="bg-[#D8CFC4] hover:bg-[#D8CFC4]/80 text-[#3A3A3A] font-medium py-3 px-8 rounded-lg transition-all duration-300"
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
      <div className="min-h-screen bg-[#F5F2EE] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#D8CFC4]/50 mb-6">
            <span className="text-4xl text-[#3A3A3A]/40">🏨</span>
          </div>
          <h2 className="text-2xl font-serif font-semibold text-[#3A3A3A] mb-4">Hotel Not Found</h2>
          <div className="h-px w-16 bg-[#C8A24A] mx-auto mb-6"></div>
          <p className="text-[#3A3A3A]/70 mb-8 leading-relaxed">The hotel you're looking for doesn't exist or may have been removed.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/hotels')}
              className="bg-[#3A3A3A] hover:bg-[#3A3A3A]/90 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
            >
              Browse Hotels
            </button>
            <button
              onClick={() => navigate('/')}
              className="bg-[#D8CFC4] hover:bg-[#D8CFC4]/80 text-[#3A3A3A] font-medium py-3 px-8 rounded-lg transition-all duration-300"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F2EE]">
      {/* Header Navigation */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-[#3A3A3A]/10 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-5">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-[#3A3A3A] hover:text-[#C8A24A] font-medium transition-all duration-300 group"
          >
            <FaArrowLeft className="mr-3 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Hotels
          </button>
        </div>
      </div>

      {/* Hotel Images Carousel */}
      <div className="relative h-80 md:h-[500px] bg-[#D8CFC4] overflow-hidden">
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
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-[#3A3A3A]/70 text-white p-4 rounded-full hover:bg-[#3A3A3A] transition-all duration-300 hover:scale-110"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-[#3A3A3A]/70 text-white p-4 rounded-full hover:bg-[#3A3A3A] transition-all duration-300 hover:scale-110"
                >
                  <FaArrowLeft className="rotate-180" />
                </button>
              </>
            )}
            
            {/* Image Indicators */}
            {hotelDetail.images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {hotelDetail.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentImageIndex === index 
                        ? 'bg-[#C8A24A]' 
                        : 'bg-white/60 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Image Counter */}
            <div className="absolute top-6 right-6 bg-[#3A3A3A]/80 text-white px-4 py-2 rounded-full text-sm font-light">
              {currentImageIndex + 1} / {hotelDetail.images.length}
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#3A3A3A]/40">
            <div className="text-center">
              <span className="text-6xl mb-4 block">🏨</span>
              <p className="text-lg">No images available</p>
            </div>
          </div>
        )}
      </div>

      {/* Hotel Information */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm overflow-hidden border border-[#3A3A3A]/10">
          {/* Header Section */}
          <div className="p-8 border-b border-[#3A3A3A]/10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px w-12 bg-[#C8A24A]"></div>
                  <span className="text-[#C8A24A] text-sm font-medium tracking-widest uppercase">
                    Hotel Details
                  </span>
                  <div className="h-px flex-grow bg-[#3A3A3A]/10"></div>
                </div>
                <h1 className="text-4xl font-serif font-bold text-[#3A3A3A] mb-4 leading-tight">
                  {hotelDetail.name}
                </h1>
                <div className="flex items-center text-[#3A3A3A]/70 mb-6">
                  <FaMapMarkerAlt className="mr-3 text-[#C8A24A] flex-shrink-0" />
                  <span className="truncate">
                    {hotelDetail.address || `${hotelDetail.city}, ${hotelDetail.countryCode}`}
                  </span>
                </div>
                <div className="flex items-center space-x-6 flex-wrap gap-3">
                  <div className="flex items-center bg-[#C8A24A]/10 px-4 py-2.5 rounded-full">
                    <FaStar className="text-[#C8A24A] mr-2" />
                    <span className="font-semibold text-[#3A3A3A]">{hotelDetail.rating || '4.5'}</span>
                  </div>
                  <span className="text-[#3A3A3A]/70">
                    {hotelDetail.reviewCount || '427'} reviews
                  </span>
                  {hotelDetail.roomTypes && hotelDetail.roomTypes.length > 0 && (
                    <span className="text-[#3A3A3A]/70">
                      {hotelDetail.roomTypes.length} room types
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-8 lg:mt-0 flex items-center space-x-6">
                <div className="text-right">
                  <div className="text-4xl font-serif font-bold text-[#C8A24A]">
                    {formatCurrency(hotelDetail.price || 199)}
                  </div>
                  <div className="text-[#3A3A3A]/60 text-sm font-light">per night</div>
                </div>
                <button
                  onClick={handleFavoriteClick}
                  className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${
                    isFavorite 
                      ? 'bg-[#C8A24A] text-[#3A3A3A] shadow-lg' 
                      : 'bg-[#D8CFC4] text-[#3A3A3A] hover:bg-[#C8A24A] hover:text-[#3A3A3A]'
                  }`}
                  title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <FaHeart className={isFavorite ? 'fill-current' : ''} size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-[#3A3A3A]/10">
            <nav className="flex overflow-x-auto -mb-px">
              {['overview', 'amenities', 'rooms', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-5 px-8 font-medium text-sm border-b-2 transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-[#C8A24A] text-[#3A3A3A] font-semibold'
                      : 'border-transparent text-[#3A3A3A]/60 hover:text-[#3A3A3A] hover:border-[#3A3A3A]/30'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-[#3A3A3A] mb-6">Overview</h3>
                  <p className="text-[#3A3A3A]/70 leading-relaxed text-lg font-light">
                    {hotelDetail.description || 'No description available for this hotel.'}
                  </p>
                </div>
                
                {/* Quick Facts */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-[#D8CFC4]/30 rounded-xl border border-[#3A3A3A]/10">
                    <div className="text-3xl font-serif font-bold text-[#C8A24A] mb-2">
                      {hotelDetail.rating || '4.5'}/5
                    </div>
                    <div className="text-[#3A3A3A]/70 text-sm font-light">Guest Rating</div>
                  </div>
                  <div className="text-center p-6 bg-[#D8CFC4]/30 rounded-xl border border-[#3A3A3A]/10">
                    <div className="text-3xl font-serif font-bold text-[#C8A24A] mb-2">
                      {hotelDetail.reviewCount || '427'}+
                    </div>
                    <div className="text-[#3A3A3A]/70 text-sm font-light">Reviews</div>
                  </div>
                  <div className="text-center p-6 bg-[#D8CFC4]/30 rounded-xl border border-[#3A3A3A]/10">
                    <div className="text-3xl font-serif font-bold text-[#C8A24A] mb-2">
                      {hotelDetail.amenities ? hotelDetail.amenities.length : '15'}+
                    </div>
                    <div className="text-[#3A3A3A]/70 text-sm font-light">Amenities</div>
                  </div>
                </div>
              </div>
            )}

            {/* Amenities Tab */}
            {activeTab === 'amenities' && (
              <div>
                <h3 className="text-2xl font-serif font-semibold text-[#3A3A3A] mb-8">Amenities & Services</h3>
                {hotelDetail.amenities && hotelDetail.amenities.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hotelDetail.amenities.map((amenity, index) => {
                      const IconComponent = getAmenityIcon(amenity);
                      return (
                        <div 
                          key={index} 
                          className="flex items-center space-x-4 p-5 bg-[#D8CFC4]/20 rounded-xl border border-[#3A3A3A]/10 hover:border-[#C8A24A]/30 transition-all duration-300 group"
                        >
                          <div className="w-12 h-12 rounded-full bg-[#C8A24A]/10 flex items-center justify-center group-hover:bg-[#C8A24A]/20 transition-all duration-300">
                            <IconComponent className="text-[#C8A24A] text-lg" />
                          </div>
                          <span className="text-[#3A3A3A] font-medium">{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#D8CFC4]/50 mb-6">
                      <span className="text-3xl text-[#3A3A3A]/40">🏊</span>
                    </div>
                    <p className="text-[#3A3A3A]/70">No amenities information available</p>
                  </div>
                )}
              </div>
            )}

            {/* Rooms Tab */}
            {activeTab === 'rooms' && (
              <div>
                <h3 className="text-2xl font-serif font-semibold text-[#3A3A3A] mb-8">Room Types</h3>
                {hotelDetail.roomTypes && hotelDetail.roomTypes.length > 0 ? (
                  <div className="space-y-8">
                    {hotelDetail.roomTypes.map((room, index) => (
                      <div 
                        key={index} 
                        className="p-8 bg-white/50 rounded-xl border border-[#3A3A3A]/10 hover:border-[#C8A24A]/30 transition-all duration-300 group"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                          <div className="flex-1">
                            <h4 className="text-xl font-serif font-semibold text-[#3A3A3A] mb-3">{room.name}</h4>
                            <p className="text-[#3A3A3A]/70 mb-6 leading-relaxed font-light">
                              {room.description || 'Comfortable and well-appointed room with all necessary amenities for a pleasant stay.'}
                            </p>
                            <div className="flex flex-wrap gap-3">
                              {room.features && room.features.map((feature, featureIndex) => (
                                <span 
                                  key={featureIndex}
                                  className="bg-[#C8A24A]/10 text-[#C8A24A] text-xs px-3 py-1.5 rounded-full font-medium"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="mt-6 lg:mt-0 lg:ml-8 lg:text-right">
                            <div className="text-3xl font-serif font-bold text-[#C8A24A] mb-2">
                              {formatCurrency(room.price)}
                            </div>
                            <div className="text-[#3A3A3A]/60 text-sm font-light mb-4">per night</div>
                            <button onClick={() => toast.success(`Room Selected - ${formatCurrency(room.price)}`)}  className="bg-[#3A3A3A] hover:bg-[#3A3A3A]/90 text-white font-medium py-3.5 px-8 rounded-full transition-all duration-300 w-full lg:w-auto">
                              Select Room
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#D8CFC4]/50 mb-6">
                      <span className="text-3xl text-[#3A3A3A]/40">🛏️</span>
                    </div>
                    <p className="text-[#3A3A3A]/70">No room information available</p>
                  </div>
                )}
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-2xl font-serif font-semibold text-[#3A3A3A] mb-8">Guest Reviews</h3>
                {hotelDetail.reviews && hotelDetail.reviews.length > 0 ? (
                  <div className="space-y-8">
                    {hotelDetail.reviews.map((review, index) => (
                      <div 
                        key={index} 
                        className="border-b border-[#3A3A3A]/10 pb-8 last:border-b-0 last:pb-0"
                      >
                        <div className="flex items-start space-x-6 mb-6">
                          <div className="w-14 h-14 bg-[#D8CFC4] rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="font-serif font-semibold text-[#3A3A3A] text-lg">
                              {review.author.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                              <h4 className="font-serif font-semibold text-[#3A3A3A] text-lg">{review.author}</h4>
                              <span className="text-[#3A3A3A]/50 text-sm font-light mt-1 sm:mt-0">
                                {new Date(review.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </span>
                            </div>
                            <div className="flex items-center space-x-4 mb-4">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <FaStar
                                    key={i}
                                    className={`${
                                      i < review.rating 
                                        ? 'text-[#C8A24A] fill-current' 
                                        : 'text-[#3A3A3A]/20'
                                    } text-sm`}
                                  />
                                ))}
                              </div>
                              <span className="text-[#3A3A3A]/60 text-sm font-light">
                                {review.rating}.0/5.0
                              </span>
                            </div>
                            <p className="text-[#3A3A3A]/70 leading-relaxed font-light">
                              {review.comment}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#D8CFC4]/50 mb-6">
                      <span className="text-3xl text-[#3A3A3A]/40">⭐</span>
                    </div>
                    <p className="text-[#3A3A3A]/70 mb-2">No reviews available yet</p>
                    <p className="text-[#3A3A3A]/50 text-sm font-light">
                      Be the first to review this hotel!
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Booking Call to Action */}
          <div className="bg-gradient-to-r from-[#3A3A3A] via-[#3A3A3A]/95 to-[#3A3A3A] p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="text-white mb-6 lg:mb-0">
                <h3 className="text-2xl font-serif font-bold mb-3">Ready to Book Your Stay?</h3>
                <p className="text-[#D8CFC4]/80 font-light">
                  Experience the perfect blend of comfort and luxury at this amazing hotel
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => toast.success(`You booked ${hotelDetail.name}`)} className="bg-[#C8A24A] hover:bg-[#C8A24A]/90 text-[#3A3A3A] font-semibold py-4 px-10 rounded-full transition-all duration-300 hover:shadow-lg">
                  Book Now
                </button>
                <button className="bg-transparent border-2 border-[#D8CFC4] text-[#D8CFC4] hover:bg-[#D8CFC4] hover:text-[#3A3A3A] font-semibold py-4 px-10 rounded-full transition-all duration-300">
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