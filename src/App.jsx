import { Route, Routes } from "react-router-dom";
import { Contact, Footer, Home, Navbar } from "./components";
import ProdDetails from "./components/container/ProdDetails";
import Prodid from "./components/container/Prodid";
import ShoppingContextProvider from "./context/Context";
import Categories from "./components/categories/Categories";
// ssine
function App() {
  return (
    <ShoppingContextProvider>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="categories" element={<Categories />}>
          <Route path=":category" element={<ProdDetails />} />
        </Route>
        <Route path="categories/product/:productid" element={<Prodid />} />
      </Routes>
      <Contact />
      <Footer />
    </ShoppingContextProvider>
  );
}

export default App;
