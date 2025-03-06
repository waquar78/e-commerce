import axios from 'axios';
import * as actionTypes from '../constants/productConstant';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:8080/product`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: {
                message: error.response?.data?.message || 'Server Error',
                status: error.response?.status,
            },
        });
    }
};


export const getProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
  
      const { data } = await axios.get(`http://localhost:8080/product/${id}`);
  
      dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
        payload: error.response?.data?.message || error.message,
      });
    }
  };
  
  export const removeProductDetails = () => (dispatch) => {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });
  };
  