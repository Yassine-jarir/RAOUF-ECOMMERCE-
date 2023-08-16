import { Outlet } from "react-router-dom";
import CategorieHeader from "../container/CategorieHeader";

function Categories() {
  return (
    <div className="categories">
      <CategorieHeader />
      <Outlet />
    </div>
  );
}

export default Categories;
