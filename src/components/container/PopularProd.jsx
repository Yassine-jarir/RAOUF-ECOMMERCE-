import { products } from "../../Data/Data";
import Products from "./Products";

function PopularProd() {
  return (
    <section className="container min-100vh">
      <div className="popular_container">
        <div className="title popular">
          Popular <span>products</span>
        </div>

        <div className="nextAndPrev">
          <div>Prev</div>
          <span>|</span>
          <div>NExt</div>
        </div>
      </div>

      <div className="product_container">
        {products.map((product) => {
          return <Products key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
}

export default PopularProd;
