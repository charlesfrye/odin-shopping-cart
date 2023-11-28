/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import CartButton from "../CartButton";
import logo from "../../assets/logo.png";
import "./Nav.css";

function Nav({ setShowCart, showCart }) {
  return (
    <nav className="navBar">
      <NavLink to="/">
        <img src={logo} alt="Real Fake Store Logo" className="navBar-logo" />
      </NavLink>
      <ul className="navTabs">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
      </ul>
      <CartButton className="cartButton" onClick={() => setShowCart(!showCart)}>
        Cart
      </CartButton>
    </nav>
  );
}

export default Nav;
