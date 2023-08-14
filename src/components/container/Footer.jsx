import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div className="container footer">
      <p>
        &#169; Copyright 2023 Minim. Website Thoughtfully designed by{" "}
        <a href="">Yassine jarir </a>
      </p>
      <div className="footer_socials">
        <BsInstagram />
        <BsFacebook />
        <BsTwitter />
      </div>
    </div>
  );
}

export default Footer;
