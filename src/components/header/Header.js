import {useSelector} from "react-redux";

export default function Header() {
    const {wishList, cart} = useSelector(({wishList: {wishList}, cart: {cart}}) => ({wishList, cart}));

    return (
        <header className={'d-flex justify-between p20 align-center'}>
            <h1>最高の店</h1>
            <div className={'d-flex'}>
                <div className={'p20'}>Wish list: {wishList.length}</div>
                <div className={'p20'}>Shopping cart: {cart.length}</div>
            </div>
        </header>
    );
}