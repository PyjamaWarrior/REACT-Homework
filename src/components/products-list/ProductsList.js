import ProductItem from "../product-item/ProductItem";
import {useDispatch, useSelector} from "react-redux";
import {toggleItemInCart, toggleItemInWishList} from "../../redux/action-creators";

export default function ProductsList() {
    const {products,wishList, cart} = useSelector(({wishList: {wishList}, cart: {cart}, products:{products}}) =>
        ({wishList, cart,products}));
    const dispatch = useDispatch();

    const onAddToWishList = (product) => {
        dispatch(toggleItemInWishList(product))
    }
    const onAddToCart = (product) => {
        dispatch(toggleItemInCart(product))
    }

    return (
        <div>
            {
                products.map(value =>
                    <ProductItem onAddToCart={onAddToCart} onAddToWishList={onAddToWishList} key={value.id}
                                 isAddedToWishList={!!wishList.find(({id}) => id === value.id)}
                                 isAddedToCart={!!cart.find(({id}) => id === value.id)}
                                 product={value}
                    />)
            }
        </div>
    );
}
