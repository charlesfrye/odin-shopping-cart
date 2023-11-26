import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <Nav showCart={showCart} setShowCart={setShowCart} />
      <Outlet />
      <Cart show={showCart} />
    </>
  );
}

export default App;
