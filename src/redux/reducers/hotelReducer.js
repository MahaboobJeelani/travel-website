import {
  FETCH_HOTELS_REQUEST,
  FETCH_HOTELS_SUCCESS,
  FETCH_HOTELS_FAILURE,
  FETCH_HOTEL_DETAIL_REQUEST,
  FETCH_HOTEL_DETAIL_SUCCESS,
  FETCH_HOTEL_DETAIL_FAILURE
} from '../actions/hotelActions';

const initialState = {
  hotels: [],
  hotelDetail: null,
  loading: false,
  error: null
};

const hotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOTELS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_HOTELS_SUCCESS:
      return {
        ...state,
        loading: false,
        hotels: action.payload,
        error: null
      };
    case FETCH_HOTELS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_HOTEL_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_HOTEL_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        hotelDetail: action.payload,
        error: null
      };
    case FETCH_HOTEL_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default hotelReducer;