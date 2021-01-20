import {SET_PRODUCTS} from "../action-types";

// export const setProducts = () => async (dispatch) => {
//     const response = await fetch('https://fakestoreapi.com/products');
//     const json = await response.json();
//
//     dispatch({type: SET_PRODUCTS, payload: json})
// }
// можно ще так
export const setProducts = () => (dispatch) => {
   fetch('https://fakestoreapi.com/products')
       .then(response =>response.json())
       .then(payload=>dispatch({type: SET_PRODUCTS, payload}))
       // .catch(err =>dispatch({type: ERROR}))
       .catch(error => {
               console.log(error);
           }
       )
}
