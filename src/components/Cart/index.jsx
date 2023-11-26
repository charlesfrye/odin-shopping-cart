/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function Cart({ show }) {
  const { cartItems } = useContext(CartContext);
  return (
    <div className={`cart ${show ? "show" : ""}`}>
      <h3>Cart</h3>
      {show &&
        cartItems.map((item) => <CartItem key={item.id} product={item} />)}
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
