import { Outlet } from "react-router-dom";
import CategorieHeader from "../container/categorieHeader";
// import Products from "../container/Products";

function Categories() {
  return (
    <div className="categories">
      <CategorieHeader />
      <Outlet />
    </div>
  );
}

export default Categories;
