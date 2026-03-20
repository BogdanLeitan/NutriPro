import "./header.css"
import HeaderLogo from '../../assets/logo4.webp'
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <img className="logoIMG" src={HeaderLogo} />
          <div className="nav-desktop">
            <Link to="/catalog">Catalog</Link>
            <Link to="/sala">Sala de sport</Link>
            <Link to="/faq">Despre noi</Link>
          </div>
          <button id="ham">
            <span></span><span></span><span></span>
          </button>
      </header>
    </>
  );
}

export default Header