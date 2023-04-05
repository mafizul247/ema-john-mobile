import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, removeAllCart, children }) => {
    // console.log('Cart Find', cart);

    let totalPrice = 0;
    let shippingCharge = 0;
    let quantity = 0;
    for (const product of cart) {

        // product.quantity = product.quantity || 1;
        totalPrice += product.price * product.quantity;
        shippingCharge += product.shipping * product.quantity;
        quantity += product.quantity;
    }

    const tax = (totalPrice * 5) / 100;
    const grandTotal = totalPrice + shippingCharge + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Total Shipping Charge: ${shippingCharge.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            <div>
                <button onClick={removeAllCart} className='btn-removeAll'><span>Remove All </span><FontAwesomeIcon icon={faTrashAlt} className='icon-delete' /></button>
            </div>
            {children}
        </div>
    );
};

export default Cart;