import React from 'react';
import { useSelector } from 'react-redux';
import FavoritesList from '../components/favorites/FavoritesList';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.items);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            My Favorite Hotels
          </h1>
          <p className="text-xl text-gray-600">
            {favorites.length > 0 
              ? `You have ${favorites.length} favorite hotel${favorites.length !== 1 ? 's' : ''}`
              : 'Your favorite hotels will appear here'
            }
          </p>
        </div>

        <FavoritesList />
      </div>
    </div>
  );
};

export default Favorites;