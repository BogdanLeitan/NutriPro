import "./faqPage.css"
import Header from "../Components/Header/Header.tsx";
import Footer from "../Components/Footer/Footer.tsx";

function Faqpage() {
  return (
    <>
      <Header />
      <section id="faq">
        <div className="section-badge">Întrebări frecvente</div>
        <h2 className="section-title">Ai <span>întrebări?</span></h2>
        <p className="section-sub">Găsești răspunsuri la cele mai frecvente întrebări despre preparatele, livrarea și abonamentele noastre.</p>

        <div className="faq-layout">
          <div className="faq-left">
            <div className="faq-categories">
              <button className="faq-cat-btn active">
                <span className="cat-dot"></span> Comenzi &amp; Livrare
              </button>
              <button className="faq-cat-btn">
                <span className="cat-dot"></span> Produse &amp; Ingrediente
              </button>
              <button className="faq-cat-btn">
                <span className="cat-dot"></span> Nutriție &amp; Dietă
              </button>
              <button className="faq-cat-btn">
                <span className="cat-dot"></span> Plată &amp; Abonamente
              </button>
            </div>
          </div>

          <div className="faq-right">

            <div className="faq-panel active" id="faq-comenzi">
              <div className="faq-item">
                <button className="faq-question">
                  Cum pot plasa o comandă?
                  <span className="faq-icon">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke="white" stroke-width="1.5" stroke-linecap="round" /></svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">Poți plasa o comandă direct de pe site-ul nostru, alegând preparatele dorite și adăugându-le în coș. Comenzile se pot plasa până la <strong>ora 20:00</strong> pentru livrarea din ziua următoare.</div>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-question">
                  Care sunt zonele de livrare?
                  <span className="faq-icon">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke="white" stroke-width="1.5" stroke-linecap="round" /></svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">Livrăm în <strong>Târgu Mureș</strong> și localitățile limitrofe în raza de 15 km. Extindem constant aria de livrare — urmărește-ne pe rețelele sociale pentru anunțuri noi.</div>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-question">
                  Cât durează livrarea?
                  <span className="faq-icon">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke="white" stroke-width="1.5" stroke-linecap="round" /></svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">Livrăm zilnic între <strong>orele 9:00 – 14:00</strong>. Vei primi o notificare cu intervalul exact cu 30 de minute înainte de sosirea curierului.</div>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-question">
                  Există un minim de comandă?
                  <span className="faq-icon">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke="white" stroke-width="1.5" stroke-linecap="round" /></svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">Da, comanda minimă este de <strong>50 RON</strong>. Livrarea este gratuită pentru comenzi peste 100 RON. Sub această valoare, taxa de livrare este de 10 RON.</div>
                </div>
              </div>
            </div>

            <div className="faq-panel" id="faq-produse">
              <div className="faq-item">
                <button className="faq-question">
                  Preparatele conțin conservanți?
                  <span className="faq-icon">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke="white" stroke-width="1.5" stroke-linecap="round" /></svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">Nu. Toate preparatele sunt gătite <strong>proaspăt în fiecare dimineață</strong>, fără conservanți, coloranți artificiali sau potențiatori de aromă. Ingredientele sunt achiziționate zilnic de la furnizori locali.</div>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-question">
                  Cât timp pot păstra mâncarea?
                  <span className="faq-icon">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke="white" stroke-width="1.5" stroke-linecap="round" /></svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">Preparatele se consumă optim în <strong>24 ore</strong> de la livrare, dacă sunt păstrate la frigider. Unele produse pot fi congelate pentru până la 7 zile — verifică eticheta fiecărui produs.</div>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-question">
                  Aveți opțiuni pentru alergii alimentare?
                  <span className="faq-icon">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke="white" stroke-width="1.5" stroke-linecap="round" /></svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">Da. Fiecare preparat are listat complet <strong>lista de alergeni</strong>. Poți filtra preparatele după alergeni pe site. Pentru nevoi speciale, contactează-ne direct înainte de comandă.</div>
                </div>
              </div>
            </div>

            <div className="faq-panel" id="faq-nutritie">
              <div className="faq-item">
                <button className="faq-question">
                  Câte calorii are o porție?
                  <span className="faq-icon">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke="white" stroke-width="1.5" stroke-linecap="round" /></svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">Porțiile variază între <strong>350 și 550 kcal</strong>, în funcție de preparat. Fiecare produs are afișat tabelul nutrițional complet (proteine, carbohidrați, grăsimi, fibre).</div>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-question">
                  Mâncarea este potrivită pentru slăbit?
                  <span className="faq-icon">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke="white" stroke-width="1.5" stroke-linecap="round" /></svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">Da. Preparatele noastre sunt concepute cu un <strong>echilibru caloric controlat</strong>, bogate în proteine și fibre, cu grăsimi minime. Sunt ideale ca parte dintr-un plan alimentar de slăbire.</div>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-question">
                  Puteți crea un plan personalizat de mese?
                  <span className="faq-icon">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke="white" stroke-width="1.5" stroke-linecap="round" /></svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">Oferim consultații pentru <strong>planuri săptămânale personalizate</strong> în colaborare cu un nutriționist partener. Contactează-ne prin formularul de contact sau telefonic pentru detalii.</div>
                </div>
              </div>
            </div>

            <div className="faq-panel" id="faq-plata">
              <div className="faq-item">
                <button className="faq-question">
                  Ce metode de plată acceptați?
                  <span className="faq-icon">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke="white" stroke-width="1.5" stroke-linecap="round" /></svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">Acceptăm <strong>card online</strong> (Visa, Mastercard), <strong>plata la livrare</strong> (cash sau POS mobil) și transfer bancar pentru abonamente.</div>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-question">
                  Există abonamente săptămânale sau lunare?
                  <span className="faq-icon">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke="white" stroke-width="1.5" stroke-linecap="round" /></svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">Da! Oferim abonamente de <strong>5, 10 și 20 de mese</strong> cu reduceri de până la 15%. Abonamentul se poate personaliza cu preparatele preferate și are livrare prioritară.</div>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-question">
                  Pot anula sau modifica o comandă?
                  <span className="faq-icon">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke="white" stroke-width="1.5" stroke-linecap="round" /></svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">Comenzile pot fi modificate sau anulate până la <strong>ora 20:00</strong> în ziua anterioară livrării. După acest interval, comanda intră în producție și nu mai poate fi modificată.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Faqpage