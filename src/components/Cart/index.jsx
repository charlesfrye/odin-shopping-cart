/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./Cart.css";

function Cart({ show, setShowCart }) {
  const { cartItems } = useContext(CartContext);

  return (
    <div className={`cart-wrapper ${show ? "show" : ""}`}>
      <div className="cart-header">
        <button className="cartButton" onClick={() => setShowCart(false)}>
          {"Cart"}
        </button>
      </div>
      <div className="cart">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} product={item} />)
        ) : (
          <div> Cart is empty. Pick something! </div>
        )}
        <button className="checkoutButton">
          {" "}
          Checkout $
          {cartItems
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)}{" "}
        </button>
      </div>
    </div>
  );
}

function CartItem({ product }) {
  const { removeFromCart } = useContext(CartContext);
  const price = product.price.toFixed(2);
  return (
    <div className="cart-item">
      <h4>
        {product.quantity} x {product.title}
      </h4>
      <p>${price}</p>
      <button onClick={() => removeFromCart(product.id)}>Remove</button>
    </div>
  );
}

export default Cart;
