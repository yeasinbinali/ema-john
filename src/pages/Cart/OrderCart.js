import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actionCreators/productActions";

const OrderCart = ({ orderCart }) => {
  const { img, name, price, quantity } = orderCart;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center">
      <img className="w-20 h-20" src={img} alt="product" />
      <div className="ml-4">
        <h5 className="font-bold md:text-xl text-xs">
          {name.substring(0, 49)}
        </h5>
        <div className="flex items-center">
          <small>
            Price: <span className="font-bold">${price}</span>
          </small>
          <small className="ml-4">
            Quantity: <span className="font-bold">{quantity}</span>
          </small>
          <button
            onClick={() => dispatch(removeFromCart(orderCart))}
            className="btn btn-xs bg-red-500 text-white ml-4"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
