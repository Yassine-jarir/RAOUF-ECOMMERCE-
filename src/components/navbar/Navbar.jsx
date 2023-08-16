import { HiMenuAlt4, HiOutlineShoppingBag } from "react-icons/hi";
import { useContext, useEffect, useState } from "react";
import MenuNavigation from "./MenuNavigation";
import { Link } from "react-router-dom";
import ShoppingCart from "../container/ShoppingCart";
import { ShopingContext } from "../../context/Context";

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [openclose, setopenclose] = useState(false);
  const { cardlenght } = useContext(ShopingContext);
  useEffect(() => {
    const headerActive = () => {
      const header = document.querySelector(".header");
      const navnav = document.querySelector(".navnav");
      window.scrollY > 20
        ? header.classList.add("active")
        : header.classList.remove("active");

      window.scrollY > 20
        ? navnav.classList.add("activenav")
        : navnav.classList.remove("activenav");
    };
    window.addEventListener("scroll", headerActive);
    return () => window.removeEventListener("scroll", headerActive);
  });
  return (
    <>
      <div className="header">
        <nav className="container navnav">
          <div className="menuSearch">
            <div className="menu_icon" onClick={() => setMenuToggle(true)}>
              <HiMenuAlt4 />
            </div>
          </div>
          <Link className="logo" to="/">
            minim
          </Link>
          <div className="accountAndCart">
            <Link to="categories/all">Categories</Link>
            <div className="pos" onClick={() => setopenclose(true)}>
              <HiOutlineShoppingBag />
              <div className="prod_number cursor-pointer">{cardlenght}</div>
            </div>
          </div>
        </nav>
      </div>
      <MenuNavigation setMenuToggle={setMenuToggle} menuToggle={menuToggle} />
      <ShoppingCart openclose={openclose} setopenclose={setopenclose} />
    </>
  );
}

export default Navbar;
