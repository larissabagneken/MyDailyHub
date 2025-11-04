import React,{useState} from "react";
import "./Compteur.css"
 function Compteur() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p> vous avez clique {count} fois</p>
            <button className="onclick" onClick={() => setCount(count + 1)}>Cliquez ici</button>
        </div>
    );
}
 export default Compteur; 