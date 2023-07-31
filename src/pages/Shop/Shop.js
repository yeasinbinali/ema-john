import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className='ml-0 md:ml-10 mt-5 md:mt-2'>
      {products.map((product) => (
        <Product key={product.ratingsCount} product={product}></Product>
      ))}
    </div>
  );
};

export default Shop;
