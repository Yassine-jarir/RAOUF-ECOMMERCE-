// import { useContext } from "react";
// import { HiOutlineHeart } from "react-icons/hi";
// import { ProductContext } from "../../context/Context";
// import { Link } from "react-router-dom";

// export default function Products() {
//   const productsArray = useContext(ProductContext);
//   const subtext = (text, maxlength) => {
//     if (text.length <= 20) {
//       return text;
//     }
//     return text.substring(0, maxlength) + "...";
//   };
//   return (
//     <div className="product_container">
//       {productsArray.map((product) => {
//         return (
//           <div key={product.id} className="product">
//             <Link to={"#"}>
//               <img src={product.image} alt="" className="product_img" />
//               <div className="nameAndPrice">
//                 <p className="name">{subtext(product.title, 20)}</p>
//                 <div>${product.price}</div>
//               </div>
//               <div className="btns">
//                 <button>Add To Cart</button>
//                 <HiOutlineHeart className="heart" />
//               </div>
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
