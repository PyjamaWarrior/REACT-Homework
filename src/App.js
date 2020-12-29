import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Header from "./components/header/Header";
import {setProducts} from "./redux/action-creators";
import ProductsList from "./components/products-list/ProductsList";
import ('./App.css');

export default function App() {
    const {products, wishList, cart} = useSelector(
        ({products: {products}, wishList: {wishList}, cart: {cart}}) => ({products, wishList, cart})
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts())
    }, [])

    return (
        <div>
            <Header/>
            <ProductsList products={products}/>
        </div>
    );
}