import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OrderCart from "./OrderCart";

const Cart = () => {
  const orderCarts = useSelector((state) => state.cart);
  return (
    <div className="ml-4 md:ml-10 mt-5 md:mt-2">
      {orderCarts.length === 0 ? (
        <p>No order | <Link style={{color: 'blue'}} to='/'>Go Back</Link></p>
      ) : (
        orderCarts
          .sort((a, b) => a.ratingsCount - b.ratingsCount)
          .map((orderCart) => (
            <OrderCart
              orderCart={orderCart}
              key={orderCart.ratingsCount}
            ></OrderCart>
          ))
      )}
    </div>
  );
};

export default Cart;
