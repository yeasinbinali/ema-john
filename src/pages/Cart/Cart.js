import React from 'react';
import { useSelector } from 'react-redux';
import OrderCart from './OrderCart';

const Cart = () => {
    const orderCarts = useSelector((state) => state.cart);
    return (
        <div className='ml-4 md:ml-10 mt-5 md:mt-2'>
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