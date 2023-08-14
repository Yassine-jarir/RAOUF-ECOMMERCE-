import { HiOutlineHeart } from "react-icons/hi";
export default function Products({ img, price, name }) {
  return (
    <div className="product">
      <img src={img} alt="" className="product_img" />
      <div className="nameAndPrice">
        <div className="name">{name}</div>
        <div>${price}</div>
      </div>
      <div className="btns">
        <button>Add To Cart</button>
        <HiOutlineHeart className="heart" />
      </div>
    </div>
  );
}
