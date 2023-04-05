import React from 'react';
import './ReviewItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItems = ({ product, hendelRemoveFromCart }) => {
    const { id, name, price, quantity, img, shipping } = product;
    // console.log(product);

    return (
        <div className='reviewItems'>
            <img src={img} alt="" className='cart-img' />
            <div className='reviewDetails'>
                <h4>{name}</h4>
                <p>Price: <span className='color-text'>${price}</span></p>
                <p>shipping Charge: <span className='color-text'>${shipping}</span></p>
                <p>Quantity: {quantity}</p>
            </div>
            <button onClick={() => hendelRemoveFromCart(id)} className='btn-delete'><FontAwesomeIcon icon={faTrashAlt} className='iconDel'/></button>
        </div>
    );
};

export default ReviewItems;