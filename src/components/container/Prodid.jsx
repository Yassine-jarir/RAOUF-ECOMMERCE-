import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillBackward } from "react-icons/ai";
function Prodid() {
  const { productid } = useParams();
  const [product, setproduct] = useState();
  const [number, setnum] = useState(1);
  useEffect(() => {
    // Make the GET request when the component mounts
    axios
      .get(`https://fakestoreapi.com/products/${productid}`)
      .then((response) => {
        // Update the state with the fetched products
        setproduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [productid]);

  return (
    <>
      <div className="prodid__container">
        <Link to={`/categories/${product?.category}`}>
          <AiFillBackward />
          BACK
        </Link>
        <h1>{product?.category}</h1>
        <div className="prodcontainer">
          <div className="prod_img">
            <img src={product?.image} alt="" />
          </div>
          <div className="info_prod_container">
            {product?.description}
            <div className="prod_info">
              <p>Quantity</p>
              <div className="price-plus">
                <button
                  onClick={() => setnum((prev) => (prev > 1 ? prev - 1 : 1))}
                >
                  -
                </button>
                <button>{number}</button>
                <button onClick={() => setnum((prev) => prev + 1)}>+</button>
              </div>
              <span>${product?.price * number}</span>
            </div>
            <div className="prod_btn">
              <button>ADD TO CART</button>
              <button>BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prodid;
