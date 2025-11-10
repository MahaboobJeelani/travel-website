import { fetchBlogs as fetchBlogsApi } from '../../utils/api.js';

export const FETCH_BLOGS_REQUEST = 'FETCH_BLOGS_REQUEST';
export const FETCH_BLOGS_SUCCESS = 'FETCH_BLOGS_SUCCESS';
export const FETCH_BLOGS_FAILURE = 'FETCH_BLOGS_FAILURE';

export const fetchBlogs = () => async (dispatch) => {
  dispatch({ type: FETCH_BLOGS_REQUEST });
  try {
    const blogs = await fetchBlogsApi();
    dispatch({
      type: FETCH_BLOGS_SUCCESS,
      payload: blogs,
    });
  } catch (error) {
    dispatch({
      type: FETCH_BLOGS_FAILURE,
      payload: error.message,
    });
  }
};
