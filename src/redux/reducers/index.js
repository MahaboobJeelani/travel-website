import { combineReducers } from 'redux';
import hotelReducer from './hotelReducer';
import blogReducer from './blogReducer';
import favoriteReducer from './favoriteReducer';

export default combineReducers({
  hotels: hotelReducer,
  blogs: blogReducer,
  favorites: favoriteReducer
});