import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import CartProvider from "./contexts/CartContext";
import "./App.css";

function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <CartProvider>
      <Nav showCart={showCart} setShowCart={setShowCart} />
      <Cart show={showCart} setShowCart={setShowCart} />
      <Outlet />
    </CartProvider>
  );
}

export default App;
