import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../images/logo/ema-john_logo.png";
import user from "../../images/user.png";

const Header = () => {
  const orderCarts = useSelector((state) => state.cart);
  console.log(orderCarts);
  let total = 0;
  // let quantity = 0;
  let shipping = 0;

  for (const cart of orderCarts) {
    // quantity = quantity + cart.quantity;
    total = total + parseFloat(cart.price);
    shipping = shipping + parseFloat(cart.shipping);
  }

  const totalPrice = total.toFixed(2);
  const totalShipping = shipping.toFixed(2);
  const tax = (total * 0.1).toFixed(2);
  const grandTotal = total + parseFloat(shipping) + parseFloat(tax);
  return (
    <div>
      <img className="w-1/3 mx-auto my-6" src={logo} alt="logo" />
      <div className="navbar sticky top-0" style={{ background: "#ff8c00" }}>
        <div className="flex-1">
          <Link to="/" className="text-xl font-bold text-white ml-0 md:ml-10">
            Shop
          </Link>
          <Link to="/inventory" className="ml-5 text-xl font-bold text-white">
            Inventory
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {orderCarts.length}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">
                  Cart: {orderCarts.length}
                </span>
                <div className='flex justify-between'>
                  <div>
                    <h5>Subtotal: </h5>
                    <h5>Tax(10%)</h5>
                    <h5>Shipping: </h5>
                    <h5 className='font-bold'>Grand Total: </h5>
                  </div>
                  <div>
                    <h5>{totalPrice}</h5>
                    <h5>{tax}</h5>
                    <h5>{totalShipping}</h5>
                    <h5 className='font-bold'>{grandTotal.toFixed(2)}</h5>
                  </div>
                </div>
                <div className="card-actions">
                  <button
                    style={{ background: "#ff8c00" }}
                    className="btn btn-block text-white"
                  >
                    <Link to="/cart">View Cart</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-8 h-8 rounded-full">
                <img src={user} alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link>Settings</Link>
              </li>
              <li>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
