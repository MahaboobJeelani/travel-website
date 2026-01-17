import React from 'react';
import { useSelector } from 'react-redux';
import FavoritesList from '../components/favorites/FavoritesList';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.items);

  return (
    <div className="min-h-screen bg-[#F5F2EE] py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="text-[#C8A24A] font-serif text-sm font-medium tracking-widest uppercase">
              Your Collection
            </span>
            <div className="h-0.5 w-16 bg-[#C8A24A] mx-auto mt-2"></div>
          </div>
          <h1 className="text-5xl font-serif font-bold text-[#3A3A3A] mb-6 leading-tight">
            My Favorite Hotels
          </h1>
          <p className="text-xl text-[#3A3A3A]/70 leading-relaxed font-light">
            {favorites.length > 0 
              ? `You have ${favorites.length} favorite hotel${favorites.length !== 1 ? 's' : ''}`
              : 'Your favorite hotels will appear here'
            }
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#3A3A3A]/10 p-8">
          <FavoritesList />
        </div>
      </div>
    </div>
  );
};

export default Favorites;