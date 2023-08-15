import { HiMenuAlt4, HiOutlineShoppingBag } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import MenuNavigation from "./MenuNavigation";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  useEffect(() => {
    const headerActive = () => {
      const header = document.querySelector(".header");
      window.scrollY > 20
        ? header.classList.add("active")
        : header.classList.remove("active");
    };
    window.addEventListener("scroll", headerActive);
    return () => window.removeEventListener("scroll", headerActive);
  });
  return (
    <>
      <div className="header">
        <nav className="container">
          <div className="menuSearch">
            <div className="menu_icon" onClick={() => setMenuToggle(true)}>
              <HiMenuAlt4 />
            </div>
            <FiSearch />
          </div>
          <Link className="logo" to="/">
            minim
          </Link>
          <div className="accountAndCart">
            <Link to="categories/all">Categories</Link>
            <div className="pos">
              <HiOutlineShoppingBag />
              <div className="prod_number">3</div>
            </div>
          </div>
        </nav>
      </div>
      <MenuNavigation setMenuToggle={setMenuToggle} menuToggle={menuToggle} />
    </>
  );
}

export default Navbar;
