import "./landingpage.css"
import Header from "../Components/Header/Header.tsx";
import Intro from "./Components/Intro.tsx";
import Footer from "../Components/Footer/Footer.tsx";
import Food from "../assets/food.png"
import Batoane from "../assets/batoane.png"
import Shakes from "../assets/shakes.png"
import SubscriptionCard from "../Components/SubscriptionCard/SubscriptionCard.tsx";
import BannerSection from "../Components/BsannerSection/BannerSection.tsx";
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <>
      <div className="top-bar">🎯 Hai să ne întâlnim la <Link to="/evenimente">următorul eveniment →</Link></div>
      <Header />
      <Intro />

      <div className="stats-bar">
        <div className="stat"><div className="stat-num">10–40g</div><div className="stat-label">Proteine / masă</div></div>
        <div className="stat"><div className="stat-num">&lt;200</div><div className="stat-label">Calorii max</div></div>
        <div className="stat"><div className="stat-num">–20%</div><div className="stat-label">Reducere activă</div></div>
        <div className="stat"><div className="stat-num">3 în 1</div><div className="stat-label">Sală · Saună · Piscină</div></div>
      </div>

      <section className="section">
        <div className="section-label">Produse recomandate</div>
        <h2 className="section-title">CATALOGUL <span className="muted">NOSTRU</span></h2>
        <p className="section-sub">Produse 100% dietetice, pentru toate gusturile românești. Alimente sănătoase care îți susțin obiectivele.</p>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-card-inner">
              <div>
                <img className="product-img" src={Food} />
              </div>
              <div className="product-info">
                <div className="product-tag">Best seller</div>
                <div className="product-name">Mâncare Dietetică</div>
                <p className="product-desc">Mâncare 100% dietetică pentru toate gusturile românești! Avem între 10g – 40g de proteine și un maxim de 200 kalorii pentru mesele tale.</p>
                <div className="product-badges"><span className="badge badge-purple">10–40g proteine</span><span className="badge badge-cyan">78–200 kcal</span></div>
                <div className="product-price"><div className="price-old">34,99 – 39,99 RON</div><div className="price-new">20,99 RON <span className="discount-tag">–20%</span></div></div>
                <button className="btn-card">Comandă →</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-card-inner">
              <div>
                <img className="product-img" src={Batoane} />
              </div>
              
              <div className="product-info">
                <div className="product-tag">Snack proteic</div>
                <div className="product-name">Batoane Proteice</div>
                <p className="product-desc">Bucură-te și indulcește-te cu batoanele noastre proteice care îți dau surplusul de proteine pentru a continua ziua!</p>
                <div className="product-badges"><span className="badge badge-purple">Ciocolată</span><span className="badge badge-cyan">Caramel</span><span className="badge badge-purple">Banane</span></div>
                <div className="product-price"><div className="price-old">7,00 RON</div><div className="price-new">5,00 RON <span className="discount-tag">–20%</span></div></div>
                <button className="btn-card">Comandă →</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-card-inner">
              <div>
                <img className="product-img" src={Shakes} />
              </div>
              
              <div className="product-info">
                <div className="product-tag">Snack proteic</div>
                <div className="product-name">Batoane Proteice</div>
                <p className="product-desc">Bucură-te și indulcește-te cu batoanele noastre proteice care îți dau surplusul de proteine pentru a continua ziua!</p>
                <div className="product-badges"><span className="badge badge-purple">Ciocolată</span><span className="badge badge-cyan">Caramel</span><span className="badge badge-purple">Banane</span></div>
                <div className="product-price"><div className="price-old">12,00 RON</div><div className="price-new">7,00 RON <span className="discount-tag">–20%</span></div></div>
                <button className="btn-card">Comandă →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BannerSection />

      <section className="gym-section">
        <div className="section-label">Complex sportiv complet</div>
        <h2 className="section-title">SALA <span className="muted">NOASTRĂ</span></h2>
        <p className="section-sub">Mai mult decât o sală — un complex complet unde îți poți transforma corpul și mintea, zi de zi.</p>

        <div className="gym-features">
          <div className="gym-card">
            <div className="gym-icon purple">🏋️</div>
            <div className="gym-info">
              <div className="gym-name">Sală de Sport</div>
              <p className="gym-desc">Echipamente moderne de ultimă generație pentru antrenamente complete. Cardio, forță și zone funcționale pentru toate nivelurile.</p>
              <div className="gym-badges"><span className="badge badge-purple">Echipamente premium</span><span className="badge badge-cyan">Toate nivelurile</span></div>
            </div>
          </div>
          <div className="gym-card">
            <div className="gym-icon cyan">🧖</div>
            <div className="gym-info">
              <div className="gym-name">Saună</div>
              <p className="gym-desc">Relaxează-te și recuperează-te mai rapid după antrenament. Sauna finlandeză elimină toxinele și relaxează musculatura profundă.</p>
              <div className="gym-badges"><span className="badge badge-purple">Recuperare activă</span><span className="badge badge-cyan">Relaxare totală</span></div>
            </div>
          </div>
          <div className="gym-card">
            <div className="gym-icon purple">🏊</div>
            <div className="gym-info">
              <div className="gym-name">Piscină</div>
              <p className="gym-desc">Înoată, fă aqua fitness sau relaxează-te. Piscina noastră este disponibilă zilnic, cu apă tratată și temperatură optimă.</p>
              <div className="gym-badges"><span className="badge badge-purple">Aqua fitness</span><span className="badge badge-cyan">Disponibilă zilnic</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="plans-section" id="abonamente">
        <p className="section-tag">Abonamente</p>
        <h2 className="section-title">Alege<br /><span>planul tău</span></h2>

        <div className="cardContainer">
          <SubscriptionCard title={"STARTER"} id={"plan-card"} price={"149"} benefits={["Acces sală de forță", "Vestiar + dușuri", "Consultanță inițială", "Consultanță inițială"] } />
          <SubscriptionCard title={"PRO"} id={"plan-card featured"} price={"249"} benefits={["Sală + Saună + Piscină", "Plan nutriție personalizat", "4 ședințe PT/lună", "Acces App Premium"] } />
          <SubscriptionCard title={"ELITE"} id={"plan-card"} price={"399"} benefits={["Acces complet 24/7", "Nutriționist personal", "PT nelimitat", "Prioritate la rezervări"] } />
        </div>

      </section>
      <Footer />
    </>
  );
}

export default Landingpage