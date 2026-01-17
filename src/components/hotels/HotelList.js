import HotelCard from './HotelCard';
import { FaHotel } from "react-icons/fa";

const HotelList = ({ hotels }) => {
  if (!hotels || hotels.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#D8CFC4]/30 mb-6">
          <span className="text-4xl text-[#3A3A3A]/40"><FaHotel /></span>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-serif font-semibold text-[#3A3A3A] mb-4">
            No Hotels Found
          </h3>
          <div className="h-px w-16 bg-[#C8A24A] mx-auto mb-6"></div>
          <p className="text-[#3A3A3A]/70 leading-relaxed font-light max-w-md mx-auto">
            We couldn't find any hotels for your selected country. Try selecting a different country or check back later for new listings.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.hotelId} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;