import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import Header from "./components/header/Header";
import {setProducts} from "./redux/action-creators";
import ProductsList from "./components/products-list/ProductsList";
import ('./App.css');

export default function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts())
    }, [])

    return (
        <div>
            <Header/>
            <ProductsList/>
        </div>
    );
}
