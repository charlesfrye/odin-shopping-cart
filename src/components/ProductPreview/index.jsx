/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import BuyButton from "../BuyButton";
import "./ProductPreview.css";

function ProductPreview({ product }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div>
        <h2 className="product-title">{product.title}</h2>
      </div>
      <BuyButton product={product} addToCart={addToCart} />
    </div>
  );
}

export default ProductPreview;
