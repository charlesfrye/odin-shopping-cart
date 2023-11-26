/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import CartButton from "../CartButton";

function Nav({ setShowCart, showCart }) {
  return (
    <nav>
      <h3>Real Fake Store</h3>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
      </ul>
      <CartButton onClick={() => setShowCart(!showCart)}>Cart</CartButton>
    </nav>
  );
}

export default Nav;
