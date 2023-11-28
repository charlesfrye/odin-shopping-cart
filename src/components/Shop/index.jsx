import { useLoaderData } from "react-router-dom";
import ProductPreview from "../ProductPreview";
import "./Shop.css";

function Shop() {
  const products = useLoaderData();

  return (
    <div className="product-preview-grid">
      {products.map((product) => (
        <ProductPreview key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Shop;
