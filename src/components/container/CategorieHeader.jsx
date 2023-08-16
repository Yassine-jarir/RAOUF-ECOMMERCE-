import { NavLink } from "react-router-dom";

function CategorieHeader() {
  return (
    <div className="container-cat">
      
      <div className="popular_container">
        <div className="title popular">
          Popular <span>products</span>
        </div>

        <div className="filtercat">
          <NavLink to="/categories/all" activeClassName="active">
            <button>All</button>
          </NavLink>
          <NavLink to="/categories/men's clothing" activeClassName="active">
            <button>Mens</button>
          </NavLink>
          <NavLink to="/categories/jewelery" activeClassName="active">
            <button>Jewelery</button>
          </NavLink>
          <NavLink to="/categories/electronics" activeClassName="active">
            <button>Electronics</button>
          </NavLink>
          <NavLink to="/categories/women's clothing" activeClassName="active">
            <button>Womens</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CategorieHeader;
