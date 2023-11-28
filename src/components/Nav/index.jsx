/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import CartButton from "../CartButton";
import logo from "../../assets/logo.png";
import "./Nav.css";

function Nav({ setShowCart, showCart }) {
  return (
    <nav>
      <NavLink to="/">
        <img src={logo} alt="Real Fake Store Logo" className="navbar-logo" />
      </NavLink>
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
