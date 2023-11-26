import { useEffect, useState } from "react";
import Product from "../Product";

function Shop() {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    let ignore = false;
    const getProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=3");
        const products = await res.json();
        if (!ignore) {
          setContents(products);
        }
      } catch (err) {
        console.log(err);
      } finally {
        console.log("finally");
      }
    };
    getProducts();
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <div>
      <h1>Shop</h1>
      <ul>
        {contents.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default Shop;
