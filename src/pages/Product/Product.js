import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actionCreators/productActions";

const Product = ({ product }) => {
  const { name, seller, price, ratings, stock, img, category, _id } = product;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center ml-0 md:ml-10 mt-5 md:mt-2">
      <img className="w-32 md:w-60" src={img} alt="img-failed"></img>
      <div className="ml-4">
        <div>
          <h2 className="text-xs m-0 md:text-2xl font-bold">
            {name.substring(0, 50)}
          </h2>
          <p className="m-0 text-xs md:text-xl">
            Company: <b>{seller}</b> | Category: <b>{category}</b>
          </p>
          <p className="text-md md:text-3xl my-0 md:my-1 lg:my-2 font-extrabold">
            <b>${price}</b>
          </p>
          <h5 className="text-xs md:text-xl">
            In Stock: {stock} | Ratings: {ratings}
          </h5>
        </div>
        <div className="flex mt-2">
          <button
            style={{ background: "#ff8c00" }}
            className="btn btn-xs md:btn-sm text-white"
            onClick={() => dispatch(addToCart(product))}
          >
            <FontAwesomeIcon icon={faCartPlus} />
            Add to Cart
          </button>
          <Link to={`/product/${_id}`}>
            <button
              style={{ background: "#ff8c00" }}
              className="btn btn-xs md:btn-sm text-white ml-2 md:ml-5"
            >
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
