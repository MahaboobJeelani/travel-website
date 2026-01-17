import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountryDropdown from '../components/hotels/CountryDropdown';
import HotelList from '../components/hotels/HotelList';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { fetchHotels } from '../redux/actions/hotelActions';
import { FaHotel, FaSearch } from "react-icons/fa";

const Hotels = () => {
  const dispatch = useDispatch();
  const { hotels, loading, error } = useSelector(state => state.hotels);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 10;

  useEffect(() => {
    if (selectedCountry) {
      dispatch(fetchHotels(selectedCountry));
      setCurrentPage(1);
    }
  }, [selectedCountry, dispatch]);

  // Pagination logic
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);
  const totalPages = Math.ceil(hotels.length / hotelsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2.5 rounded-lg transition-all duration-300 ${
            currentPage === i
              ? 'bg-[#C8A24A] text-[#3A3A3A] font-medium shadow-sm'
              : 'bg-[#D8CFC4]/50 text-[#3A3A3A]/70 hover:bg-[#D8CFC4]/70 hover:text-[#3A3A3A]'
          }`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex justify-center items-center space-x-3 mt-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-5 py-2.5 bg-[#D8CFC4]/50 rounded-lg disabled:opacity-40 hover:bg-[#D8CFC4]/70 transition-all duration-300 text-[#3A3A3A]/70 hover:text-[#3A3A3A] disabled:hover:bg-[#D8CFC4]/50"
        >
          Previous
        </button>
        
        <div className="flex items-center space-x-2">
          {pages}
        </div>
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-5 py-2.5 bg-[#D8CFC4]/50 rounded-lg disabled:opacity-40 hover:bg-[#D8CFC4]/70 transition-all duration-300 text-[#3A3A3A]/70 hover:text-[#3A3A3A] disabled:hover:bg-[#D8CFC4]/50"
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F2EE] py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="text-[#C8A24A] font-serif text-sm font-medium tracking-widest uppercase">
              Hotel Directory
            </span>
            <div className="h-0.5 w-16 bg-[#C8A24A] mx-auto mt-2"></div>
          </div>
          <h1 className="text-5xl font-serif font-bold text-[#3A3A3A] mb-6 leading-tight">
            Find Your Perfect Stay
          </h1>
          <p className="text-xl text-[#3A3A3A]/70 max-w-2xl mx-auto leading-relaxed">
            Discover amazing hotels around the world
          </p>
        </div>

        {/* Country Selection */}
        <div className="max-w-2xl mx-auto mb-12">
          <CountryDropdown
            selectedCountry={selectedCountry}
            onCountryChange={setSelectedCountry}
          />
        </div>

        {/* Loading State */}
        {loading && <LoadingSpinner text="Loading hotels..." />}

        {/* Error State */}
        {error && (
          <div className="max-w-2xl mx-auto bg-[#D8CFC4]/30 border border-[#3A3A3A]/20 px-6 py-5 rounded-xl mb-8 text-center">
            <p className="text-[#3A3A3A] font-medium">{error}</p>
          </div>
        )}

        {/* Results Info */}
        {selectedCountry && !loading && hotels.length > 0 && (
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 bg-white/50 backdrop-blur-sm px-6 py-3.5 rounded-full border border-[#3A3A3A]/10">
              <p className="text-[#3A3A3A] font-light">
                Found <span className="font-medium text-[#C8A24A]">{hotels.length}</span> hotels in <span className="font-medium">{selectedCountry}</span>
                {currentHotels.length < hotels.length && (
                  <span className="text-[#3A3A3A]/60"> • Showing {currentHotels.length} of {hotels.length}</span>
                )}
              </p>
            </div>
          </div>
        )}

        {/* Hotels List */}
        {selectedCountry && !loading && (
          <>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#3A3A3A]/10 p-8 mb-10">
              <HotelList hotels={currentHotels} />
            </div>
            {renderPagination()}
          </>
        )}

        {/* Empty State */}
        {!selectedCountry && !loading && (
          <div className="max-w-3xl mx-auto text-center py-16">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-[#D8CFC4]/50 mb-8">
              <span className="text-5xl text-[#3A3A3A]/40"><FaHotel/></span>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-semibold text-[#3A3A3A] mb-4">
                Select a Country
              </h3>
              <div className="h-px w-24 bg-[#C8A24A] mx-auto mb-6"></div>
              <p className="text-[#3A3A3A]/70 max-w-md mx-auto leading-relaxed font-light">
                Choose a country from the dropdown above to discover available hotels and start planning your next adventure.
              </p>
            </div>
          </div>
        )}

        {/* No Results State */}
        {selectedCountry && !loading && hotels.length === 0 && !error && (
          <div className="max-w-3xl mx-auto text-center py-16">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-[#D8CFC4]/50 mb-8">
              <span className="text-5xl text-[#3A3A3A]/40"><FaSearch /></span>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-semibold text-[#3A3A3A] mb-4">
                No Hotels Found
              </h3>
              <div className="h-px w-24 bg-[#C8A24A] mx-auto mb-6"></div>
              <p className="text-[#3A3A3A]/70 max-w-md mx-auto leading-relaxed font-light mb-8">
                We couldn't find any hotels for {selectedCountry}. Try selecting a different country or check back later for new listings.
              </p>
              <button
                onClick={() => setSelectedCountry('')}
                className="inline-flex items-center gap-2 bg-[#C8A24A] text-[#3A3A3A] font-medium py-3.5 px-8 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Choose Another Country
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hotels;