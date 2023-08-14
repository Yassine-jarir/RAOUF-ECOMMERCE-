import { HiMenuAlt4, HiOutlineShoppingBag } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import MenuNavigation from "./MenuNavigation";

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
          <div className="logo">minim</div>
          <div className="accountAndCart">
            <a href="">account</a>
            <HiOutlineShoppingBag />
          </div>
        </nav>
      </div>
      <MenuNavigation setMenuToggle={setMenuToggle} menuToggle={menuToggle} />
    </>
  );
}

export default Navbar;
