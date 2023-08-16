import { Outlet } from "react-router-dom";
import CategorieHeader from "../container/categorieHeader";

function Categories() {
  return (
    <div className="categories">
      <CategorieHeader />
      <Outlet />
    </div>
  );
}

export default Categories;
