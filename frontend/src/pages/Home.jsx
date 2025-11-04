    import "./Home.css";
    import Compteur from "../components/Compteur.jsx" 
    

function Home() {
  return (
    <div className="home">
      <section className="hero">
        
        <h1>Bienvenue à <span>Startup Génération Academy</span></h1>
        <p>Nous formons les leaders et innovateurs de demain, à travers l’entrepreneuriat et la créativité.</p>
        <button className="cta">Découvrir nos programmes</button>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Formation Startup</h3>
          <p>Apprends à lancer et gérer ton propre projet avec nos experts.</p>
        </div>
        <div className="feature-card">
          <h3> Innotvaion</h3>
          <p>Développe ton esprit créatif et ta pensée critique.</p>
        </div>
        <div      className="feature-card">
          <h3> Communauté</h3>
          <p>Rejoins une communauté d’entrepreneurs ambitieux et passionnés.</p>
        </div>
      </section>
      <Compteur />
    </div>
  );
}

export default Home;