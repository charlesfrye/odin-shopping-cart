/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import BuyButton from "../BuyButton";

function Product({ product }) {
  const { addToCart } = useContext(CartContext);
  const price = product.price.toFixed(2);
  return (
    <li key={product.id}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${price}</p>
      <BuyButton product={product} addToCart={addToCart} />
    </li>
  );
}

export default Product;
