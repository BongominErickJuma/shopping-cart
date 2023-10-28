import React from "react";
import { useEffect } from "react";
import { addImageZoom } from "../Components/AddZoom";

const ShoeProducts = ({ products, addToCart }) => {
  useEffect(() => {
    addImageZoom();
  }, []);
  return (
    <div className="container">
      <h2>Shoes</h2>
      <div className="shopItem">
        {products.map((pdt) => (
          <div className="productItem" key={pdt.id}>
            <img src={pdt.image} alt="" />
            <p>Price: ${pdt.price}</p>
            <button onClick={() => addToCart(pdt)}>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoeProducts;
