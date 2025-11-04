import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png"; // <-- import du logo

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo SGA" className="navbar-logo" />
        </Link>
      </div>
      
      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À propos</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
