import {useMemo} from "react";
import {useSelector} from "react-redux";

export default function Header() {
    const {wishList, cart} = useSelector(({wishList: {wishList}, cart: {cart}}) => ({wishList, cart}));

    const wishListPrice = useMemo(() => {
        return wishList.reduce((acc, el) => acc += el.price, 0);
    }, [wishList]);

    const cartPrice = useMemo(() => {
        return cart.reduce((acc, el) => acc += el.price, 0);
    }, [cart]);

    return (
        <header className={'d-flex justify-between p20 align-center'}>
            <h1>最高の店</h1>
            <div className={'d-flex'}>
                <div className={'p20'} title={'Total price: ' + wishListPrice + '$'}>Wish list: {wishList.length}</div>
                <div className={'p20'} title={'Total price: ' + cartPrice + '$'}>Shopping cart: {cart.length}</div>
            </div>
        </header>
    );
}