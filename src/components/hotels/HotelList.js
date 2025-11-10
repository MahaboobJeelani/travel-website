import React from 'react';
import HotelCard from './HotelCard';

const HotelList = ({ hotels }) => {
  if (!hotels || hotels.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🏨</div>
        <h3 className="text-2xl font-semibold text-gray-600 mb-2">
          No Hotels Found
        </h3>
        <p className="text-gray-500 max-w-md mx-auto">
          We couldn't find any hotels for your selected country. Try selecting a different country or check back later for new listings.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.hotelId} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;