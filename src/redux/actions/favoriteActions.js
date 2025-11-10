export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const LOAD_FAVORITES = 'LOAD_FAVORITES';

export const loadFavorites = () => {
  return (dispatch) => {
    try {
      const storedFavorites = localStorage.getItem('travelExplorerFavorites');
      const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
      dispatch({
        type: LOAD_FAVORITES,
        payload: favorites
      });
    } catch (error) {
      console.error('Error loading favorites from localStorage:', error);
    }
  };
};

export const addToFavorites = (hotel) => {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_TO_FAVORITES,
      payload: hotel
    });

    const { favorites } = getState();
    try {
      localStorage.setItem('travelExplorerFavorites', JSON.stringify(favorites.items));
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  };
};

export const removeFromFavorites = (hotelId) => {
  return (dispatch, getState) => {
    dispatch({
      type: REMOVE_FROM_FAVORITES,
      payload: hotelId
    });

    const { favorites } = getState();
    try {
      localStorage.setItem('travelExplorerFavorites', JSON.stringify(favorites.items));
    } catch (error) {
      console.error('Error updating favorites in localStorage:', error);
    }
  };
};