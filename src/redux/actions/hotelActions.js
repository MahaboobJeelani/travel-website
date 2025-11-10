import { fetchHotelsByCountry, fetchHotelDetail } from '../../utils/api';

export const FETCH_HOTELS_REQUEST = 'FETCH_HOTELS_REQUEST';
export const FETCH_HOTELS_SUCCESS = 'FETCH_HOTELS_SUCCESS';
export const FETCH_HOTELS_FAILURE = 'FETCH_HOTELS_FAILURE';
export const FETCH_HOTEL_DETAIL_REQUEST = 'FETCH_HOTEL_DETAIL_REQUEST';
export const FETCH_HOTEL_DETAIL_SUCCESS = 'FETCH_HOTEL_DETAIL_SUCCESS';
export const FETCH_HOTEL_DETAIL_FAILURE = 'FETCH_HOTEL_DETAIL_FAILURE';

export const fetchHotels = (countryCode) => async (dispatch) => {
  dispatch({ type: FETCH_HOTELS_REQUEST });
  try {
    const hotels = await fetchHotelsByCountry(countryCode);
    dispatch({
      type: FETCH_HOTELS_SUCCESS,
      payload: hotels
    });
  } catch (error) {
    dispatch({
      type: FETCH_HOTELS_FAILURE,
      payload: error.message
    });
  }
};

export const getHotelDetail = (hotelId) => async (dispatch) => {
  dispatch({ type: FETCH_HOTEL_DETAIL_REQUEST });
  try {
    const hotelDetail = await fetchHotelDetail(hotelId);
    dispatch({
      type: FETCH_HOTEL_DETAIL_SUCCESS,
      payload: hotelDetail
    });
  } catch (error) {
    dispatch({
      type: FETCH_HOTEL_DETAIL_FAILURE,
      payload: error.message
    });
  }
};