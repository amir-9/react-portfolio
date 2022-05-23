import { products } from "../../data";
import Product from "../product/product";
import "./productList.css";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-products ">
        {products.map((product) => (
          <Product key={product.id} image={product.img} link={product.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
