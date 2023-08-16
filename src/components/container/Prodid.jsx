import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillBackward } from "react-icons/ai";
import { ShopingContext } from "../../context/Context";
function Prodid() {
  let { productid } = useParams();
  productid = parseInt(productid);
  const { getitemsQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useContext(ShopingContext);
  const quatity = getitemsQuantity(productid);
  const [prod, setprod] = useState();

  useEffect(() => {
    // Make the GET request when the component mounts
    axios
      .get(`https://fakestoreapi.com/products/${productid}`)
      .then((response) => {
        // Update the state with the fetched products
        setprod(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [productid]);

  return (
    <>
      <div className="prodid__container">
        <Link
          to={`/categories/${prod?.category}`}
          className="cursor-pointer z-20 relative"
        >
          <AiFillBackward />
          BACK
        </Link>
        <h1>{prod?.category}</h1>
        <div className="prodcontainer">
          <div className="prod_img">
            <img src={prod?.image} alt="" />
          </div>
          <div className="info_prod_container">
            {prod?.description}
            <div className="prod_info">
              <p>Quantity</p>
              <div className="price-plus">
                <button
                  onClick={() =>
                    getitemsQuantity(productid) >= 1
                      ? decreaseCartQuantity(productid)
                      : null
                  }
                >
                  -
                </button>
                <button>
                  {getitemsQuantity(productid) >= 1
                    ? getitemsQuantity(productid)
                    : 1}
                </button>
                <button
                  onClick={() => {
                    increaseCartQuantity(productid);
                  }}
                >
                  +
                </button>
              </div>
              <span>${quatity <= 1 ? prod?.price : prod?.price * quatity}</span>
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
