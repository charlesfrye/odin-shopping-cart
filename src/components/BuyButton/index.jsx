// eslint-disable-next-line react/prop-types
function BuyButton({ product, addToCart }) {
  return <button onClick={() => addToCart(product)}>Buy</button>;
}

export default BuyButton;
