import { useNavigate } from "react-router-dom";
//import { useState, useEffect } from "react"
import IntroImg from "../../assets/int2.png"
//import Catalog from "../../Catalog/Catalog.tsx";
import "./intro.css"

function Intro() {
  let goTo = useNavigate();
  //const [desktop, mobile] = useState(window.innerWidth < 500);
  if (window.innerWidth <= 500) {
    return (
      <>
        <section className="hero">
          <div className="introText">
            <div className="hero-badge">
              100% Dietetic · Sală · Saună · Piscină
            </div>
            <h1 className="hero-title">
              NUTRI
              <br />
              <span className="line2">PRO</span>
            </h1>
            <div className="hero-visual">
              <img className="int" src={IntroImg} />
              {/*<div className="gradient"></div>*/}
            </div>
            <p className="hero-slogan">
              <strong>Mănânci mai sănătos,</strong> trăiești mai frumos
            </p>
            <div className="hero-ctas">
              <button className="btn-primary" onClick={() => {goTo("/catalog")}}>Vezi Catalog →</button>
              <button className="btn-secondary">Abonamente</button>
            </div>
          </div>
        </section>
      </>
    );
  }
  else {
    return (
      <>
        <section className="hero">
          <div className="introText">
            <div className="hero-badge">
              100% Dietetic · Sală · Saună · Piscină
            </div>
            <h1 className="hero-title">
              NUTRI
              <br />
              <span className="line2">PRO</span>
            </h1>
            <p className="hero-slogan">
              <strong>Mănânci mai sănătos,</strong> trăiești mai frumos
            </p>
            <div className="hero-ctas">
              <button className="btn-primary" onClick={() => {goTo("/catalog")}}>Vezi Catalog →</button>
              <button className="btn-secondary">Abonamente</button>
            </div>
          </div>

          <div className="hero-visual">
            <img className="int" src={IntroImg} />
            {/*<div className="gradient"></div>*/}
          </div>
        </section>
      </>
    );
  }

}

export default Intro;
