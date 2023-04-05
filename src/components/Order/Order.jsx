import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../../utilities/fakedb';

const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)
    // console.log(savedCart);

    const hendelRemoveFromCart = (id) => {
        // console.log(id);
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id);
    }

    const removeAllCart = () => {
        // console.log('remove all');
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='productsContainer'>
                {
                    cart.map(product => <ReviewItems
                        key={product.id}
                        product={product}
                        hendelRemoveFromCart={hendelRemoveFromCart}
                    ></ReviewItems>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} removeAllCart={removeAllCart}>
                    <Link to='/checkout'><button className='proceed-checkout'>Proceed Checkout</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;