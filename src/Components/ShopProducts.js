import React from "react";
import { NavLink } from "react-router-dom";

const ShopProducts = ({ products }) => {
  return (
    <div className="container shopItem">
      {products.map((pdt) => (
        <div className="productItem" key={pdt.id}>
          <NavLink to={`/${pdt.name}`}>
            <h2>{pdt.name}</h2>
            <img src={pdt.image} alt="" />
            <button>see more</button>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default ShopProducts;
