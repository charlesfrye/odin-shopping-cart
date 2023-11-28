import PropTypes from "prop-types";

function BuyButton({ product, addToCart }) {
  const price = product.price.toFixed(2);
  return <button onClick={() => addToCart(product)}>Buy for ${price}</button>;
}

// proptypes for BuyButton

BuyButton.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default BuyButton;
