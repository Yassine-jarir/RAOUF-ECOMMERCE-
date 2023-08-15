import axios from "axios";
import { useEffect, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";

function ProdDetails() {
  const { category } = useParams();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    // Make the GET request when the component mounts
    axios
      .get(
        `${
          category === "all"
            ? "https://fakestoreapi.com/products"
            : `https://fakestoreapi.com/products/category/${category}`
        }`
      )
      .then((response) => {
        // Update the state with the fetched products
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [category]);

  const subtext = (text, maxlength) => {
    if (text.length <= 20) {
      return text;
    }
    return text.substring(0, maxlength) + "...";
  };
  return (
    <div className="product_container">
      {product.map((product) => {
        return (
          <div key={product.id} className="product">
            <Link to={`/categories/product/${product.id}`}>
              <img src={product.image} alt="" className="product_img" />
              <div className="nameAndPrice">
                <p className="name">{subtext(product.title, 20)}</p>
                <div>${product.price}</div>
              </div>
              <div className="btns">
                <button>Add To Cart</button>
                <HiOutlineHeart className="heart" />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProdDetails;
