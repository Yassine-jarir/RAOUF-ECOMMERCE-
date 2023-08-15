import { Route, Routes } from "react-router-dom";
import { Contact, Footer, Home, Navbar } from "./components";
import Categories from "./components/categories/categories";
// import { ProductContext } from "./context/Context";
// import axios from "axios";
// import { useEffect, useState } from "react";
import ProdDetails from "./components/container/ProdDetails";
// import Products from "./components/container/Products";
import Prodid from "./components/container/Prodid";
// import Products from "./components/container/Products";

function App() {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   // Make the GET request when the component mounts
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((response) => {
  //       // Update the state with the fetched products
  //       setProducts(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //     });
  // }, []);
  return (
    <>
      {/* <ProductContext.Provider value={products}> */}
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="categories" element={<Categories />}>
          {/* <Route index element={<Products />} /> */}
          <Route path=":category" element={<ProdDetails />} />
        </Route>
        <Route path="categories/product/:productid" element={<Prodid />} />
      </Routes>
      <Contact />
      <Footer />
      {/* </ProductContext.Provider> */}
    </>
  );
}

export default App;
