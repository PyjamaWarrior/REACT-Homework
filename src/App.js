import React  from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import ('./App.css');

export default function App() {
    const counter = useSelector(({counter}) => counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={() => dispatch({type: 'INC_COUNTER'})}>inc</button>
            <button onClick={() => dispatch({type: 'DEC_COUNTER'})}>dec</button>
            <button onClick={() => dispatch({type: 'RESET'})}>reset</button>
        </div>
    );
}