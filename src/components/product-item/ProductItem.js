export default function ProductItem({product, onAddToWishList, onAddToCart, isAddedToWishList, isAddedToCart}) {
    const {title, price, description} = product;

    return (
        <div className={'tac p20 border-bottom'}>
            <h4>{title}</h4>
            <span>Price: {price}$</span>
            <p>{description}</p>
            <button onClick={() => onAddToWishList(product)}
                    style={{background: isAddedToWishList ? 'lightcoral' : 'mediumaquamarine'}}>
                {isAddedToWishList ? 'Remove from wish list' : 'Add to wish list'}
            </button>
            <button onClick={() => onAddToCart(product)}
                    style={{background: isAddedToCart ? 'lightcoral' : 'mediumaquamarine'}}>
                {isAddedToCart ? 'Remove from cart' : 'Add to cart'}
            </button>
        </div>

    );
}