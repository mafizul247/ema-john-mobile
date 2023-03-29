import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // console.log(cart);

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
        </div>
    );
};

export default Cart;