import { Link } from "react-router-dom";
import "./Navbar.css" //le style css de la page

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo"> 🎬 CineReact</h2>
             <ul className="nav-links">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
             </ul>
        </nav>
    );
}
    export default Navbar;