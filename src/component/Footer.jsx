import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="icon-group">
        <span className="icon-light">
          <FaFacebookF />
        </span>
        <span className="icon-light">
          <FaFacebookMessenger />
        </span>
        <span className="icon-light">
          <FaInstagramSquare />
        </span>
        <span className="icon-light">
          <FaLinkedinIn />
        </span>
      </div>
      <div>
        <p> Copyright @ 20024 - All rights resvered </p>
      </div>
    </footer>
  );
}

export default Footer;
