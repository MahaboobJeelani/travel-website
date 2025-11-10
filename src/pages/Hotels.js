import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountryDropdown from '../components/hotels/CountryDropdown';
import HotelList from '../components/hotels/HotelList';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { fetchHotels } from '../redux/actions/hotelActions';

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
          className={`px-4 py-2 rounded-lg transition duration-300 ${
            currentPage === i
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex justify-center items-center space-x-2 mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition duration-300"
        >
          Previous
        </button>
        
        {pages}
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition duration-300"
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Find Your Perfect Stay
          </h1>
          <p className="text-xl text-gray-600">
            Discover amazing hotels around the world
          </p>
        </div>

        {/* Country Selection */}
        <CountryDropdown
          selectedCountry={selectedCountry}
          onCountryChange={setSelectedCountry}
        />

        {/* Loading State */}
        {loading && <LoadingSpinner text="Loading hotels..." />}

        {/* Error State */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center max-w-md mx-auto">
            {error}
          </div>
        )}

        {/* Results Info */}
        {selectedCountry && !loading && hotels.length > 0 && (
          <div className="text-center mb-6">
            <p className="text-gray-600">
              Found <span className="font-semibold">{hotels.length}</span> hotels in {selectedCountry}
              {currentHotels.length < hotels.length && ` • Showing ${currentHotels.length} of ${hotels.length}`}
            </p>
          </div>
        )}

        {/* Hotels List */}
        {selectedCountry && !loading && (
          <>
            <HotelList hotels={currentHotels} />
            {renderPagination()}
          </>
        )}

        {/* Empty State */}
        {!selectedCountry && !loading && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🏨</div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">
              Select a Country
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Choose a country from the dropdown above to discover available hotels and start planning your next adventure.
            </p>
          </div>
        )}

        {/* No Results State */}
        {selectedCountry && !loading && hotels.length === 0 && !error && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">
              No Hotels Found
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We couldn't find any hotels for {selectedCountry}. Try selecting a different country or check back later for new listings.
            </p>
            <button
              onClick={() => setSelectedCountry('')}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
            >
              Choose Another Country
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hotels;