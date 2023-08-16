import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <>
      <footer className="p-[1rem]">
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Store locator</a>
          <a href="#">FAQs</a>
          <a href="#">News</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="container footer">
          <p>
            &#169; Copyright 2023 Minim. Website Thoughtfully designed by{" "}
            <a href="">Yassine jarir </a>
          </p>
          <div className="footer_socials flex">
            <BsInstagram />
            <BsFacebook />
            <BsTwitter />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
