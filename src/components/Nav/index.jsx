/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import CartButton from "../CartButton";

function Nav({ setShowCart, showCart }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <CartButton onClick={() => setShowCart(!showCart)}>Cart</CartButton>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
