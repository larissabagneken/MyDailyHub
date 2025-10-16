import { BrowserRouter, Routes, Route, Link} from "react-router-dom"; 
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";


function App () {
  return (
    <BrowserRouter>
    <Navbar />
       <nav>
        <Link to="/"Acceuil> </Link> 
        <Link to="/about"A propos> </Link> 
        <Link to="/contact"contact></Link>
       </nav>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About/>}/>
           <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
  );
}
export default App;