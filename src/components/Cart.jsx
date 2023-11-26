function Cart({ show }) {
  return (
    <div className={`cart ${show ? "show" : ""}`}>
      <h3>Cart</h3>
      {show && <p>Cart is open</p>}
    </div>
  );
}

export default Cart;
