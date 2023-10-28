import React from "react";
import { Link } from "react-router-dom";

const ShoppingCart = ({
  cart,
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
  clearCart,
}) => {
  return (
    <div className="cartItem">
      {cart.length <= 0 ? (
        <Link to="/">
          <button>add Items to cart</button>
        </Link>
      ) : (
        <h3>
          <button onClick={clearCart}>Empty Cart</button>
        </h3>
      )}

      <div className="shopItem">
        {cart.map((pdt) => (
          <div className="productItem" key={pdt.id}>
            <h2>{pdt.name}</h2>
            <img src={pdt.image} alt="" />
            <p>Price: ${pdt.price}</p>
            <p>Quantity: {pdt.quantity}</p>
            {pdt.quantity > 1 && (
              <button className="btnr" onClick={() => decrementQuantity(pdt)}>
                -
              </button>
            )}
            <button className="btnr" onClick={() => incrementQuantity(pdt)}>
              +
            </button>
            <button
              className="btnr"
              onClick={() => {
                removeFromCart(pdt);
              }}
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
