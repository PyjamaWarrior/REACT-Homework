import {SET_PRODUCTS} from "../action-types";

export const setProducts = () => async (dispatch) => {
    const response = await fetch('https://fakestoreapi.com/products');
    const json = await response.json();

    dispatch({type: SET_PRODUCTS, payload: json})
}