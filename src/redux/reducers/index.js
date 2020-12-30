import {combineReducers} from "redux";
import {products} from "./products";
import {wishList} from "./wishList";
import {cart} from "./cart";

export const reducer = combineReducers({
    products,
    wishList,
    cart
})