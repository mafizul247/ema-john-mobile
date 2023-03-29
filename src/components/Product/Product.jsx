import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { id, name, img, price, ratings, seller } = props.product;
    // console.log(props.product);
    const handlerAddToCart = props.handlerAddToCart;

    return (
        <div className='product'>
            <img className='product-image' src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Stars</p>
            <button onClick={() => handlerAddToCart(props.product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;