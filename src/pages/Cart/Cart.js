import React from 'react';
import { useSelector } from 'react-redux';
import OrderCart from './OrderCart';

const Cart = () => {
    const orderCarts = useSelector((state) => state.cart);
    return (
        <div>
            {
                orderCarts.map(orderCart => <OrderCart
                    orderCart={orderCart}
                    key={orderCart.ratingsCount}
                ></OrderCart>)
            }
        </div>
    );
};

export default Cart;