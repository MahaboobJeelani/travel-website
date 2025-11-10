import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  LOAD_FAVORITES
} from '../actions/favoriteActions';

const initialState = {
  items: []
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FAVORITES:
      return {
        ...state,
        items: action.payload
      };
    case ADD_TO_FAVORITES:
      const exists = state.items.some(item => item.hotelId === action.payload.hotelId);
      if (exists) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        items: state.items.filter(item => item.hotelId !== action.payload)
      };
    default:
      return state;
  }
};

export default favoriteReducer;