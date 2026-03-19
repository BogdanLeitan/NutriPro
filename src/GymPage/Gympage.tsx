import "./gymPage.css"

function Gympage() {
  return (
    <>
      <div className="hero2">
        <div className="hero-glow-left2"></div>
        <div className="hero-glow-right2"></div>

        <div className="hero-left2">
          <div className="hero-badge2">
            <span className="badge-dot2"></span>
            100% Dietetic · Sală · Saună · Piscină
          </div>

          <h1 className="hero-title2">
            <span className="line-white2">NUTRI</span>
            <span className="line-gradient2">SPORT</span>
          </h1>

          <div className="hero-quote2">
            <strong>Antrenează-te mai inteligent,</strong>
            <span>trăiești mai sănătos</span>
          </div>

          <div className="hero-btns2">
            <a href="#facilitati" className="btn-primary2">
              Vezi Facilitățile →
            </a>
            <a href="#abonamente" className="btn-outline2">Abonamente</a>
          </div>
        </div>

        <div className="hero-right2">
          <div className="hero-image-box">
            <div className="hero-stats">
              <div className="hstat">
                <div className="hstat-num">500<span className="accent">+</span></div>
                <div className="hstat-label">Membri activi</div>
              </div>
              <div className="hstat-div"></div>
              <div className="hstat">
                <div className="hstat-num">3<span className="accent">+</span></div>
                <div className="hstat-label">Facilități</div>
              </div>
              <div className="hstat-div"></div>
              <div className="hstat">
                <div className="hstat-num">6<span className="accent">:00</span></div>
                <div className="hstat-label">Deschidere</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="page-divider" />

      <div className="section" id="facilitati">
        <div className="section-header">
          <div>
            <div className="section-label">Spațiile noastre</div>
            <h2 className="section-title">FACILITĂȚILE <span className="purple">NOASTRE</span></h2>
          </div>
          <p className="section-sub">Echipamente profesionale, instructori certificați și un mediu care te motivează să depășești limitele zilnic.</p>
        </div>

        <div className="fac-grid">

          <div className="fac-card sala">
            <div className="fac-top">
              <div className="fac-top-glow"></div>
              <div className="fac-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 4v16M18 4v16M3 8h3M18 8h3M3 16h3M18 16h3M6 12h12" />
                </svg>
              </div>
              <div className="fac-nr">01</div>
            </div>
            <div className="fac-body">
              <span className="fac-tag">Sală de sport</span>
              <div className="fac-name">FITNESS & FORȚĂ</div>
              <p className="fac-desc">Peste 120 de aparate cardio și de forță, zone free weights și spații pentru antrenamente funcționale.</p>
              <ul className="fac-feats">
                <li className="fac-feat">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#a855f7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  120+ aparate profesionale
                </li>
                <li className="fac-feat">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#a855f7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  Zone cardio & free weights
                </li>
                <li className="fac-feat">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#a855f7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  Instructori personali disponibili
                </li>
                <li className="fac-feat">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#a855f7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  Vestiare cu duș inclus
                </li>
              </ul>
              <button className="fac-btn">REZERVĂ ACUM</button>
            </div>
          </div>

          <div className="fac-card sauna">
            <div className="fac-top">
              <div className="fac-top-glow"></div>
              <div className="fac-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f0aa28" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2c0 3-3 4-3 7a3 3 0 006 0c0-3-3-4-3-7z" />
                  <path d="M7 13c0 2.76 2.24 5 5 5s5-2.24 5-5" />
                  <path d="M5 20h14" />
                </svg>
              </div>
              <div className="fac-nr">02</div>
            </div>
            <div className="fac-body">
              <span className="fac-tag">Saună & Spa</span>
              <div className="fac-name">SAUNĂ FINLANDEZĂ</div>
              <p className="fac-desc">Relaxare profundă la 90°C cu pietre vulcanice și abur aromatic. Sală privată disponibilă pentru grupuri.</p>
              <ul className="fac-feats">
                <li className="fac-feat">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#f0aa28" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  Temperatură reglabilă 60–95°C
                </li>
                <li className="fac-feat">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#f0aa28" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  Saună privată la rezervare
                </li>
                <li className="fac-feat">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#f0aa28" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  Uleiuri esențiale incluse
                </li>
                <li className="fac-feat">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#f0aa28" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  Zonă de răcire cu dușuri reci
                </li>
              </ul>
              <button className="fac-btn">REZERVĂ ACUM</button>
            </div>
          </div>

          <div className="fac-card piscina">
            <div className="fac-top">
              <div className="fac-top-glow"></div>
              <div className="fac-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 12c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
                  <path d="M2 17c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
                  <path d="M8 7l2-4 2 1.5L14 7" />
                </svg>
              </div>
              <div className="fac-nr">03</div>
            </div>
            <div className="fac-body">
              <span className="fac-tag">Piscină</span>
              <div className="fac-name">BAZIN OLIMPIC</div>
              <p className="fac-desc">Bazin semiolimpic cu 6 culoare, apă tratată cu ozon. Cursuri de înot pentru toate nivelele.</p>
              <ul className="fac-feats">
                <li className="fac-feat">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#06b6d4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  25m × 6 culoare
                </li>
                <li className="fac-feat">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#06b6d4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  Apă tratată cu ozon
                </li>
                <li className="fac-feat">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#06b6d4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  Cursuri înot toate nivelele
                </li>
                <li className="fac-feat">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#06b6d4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  Salvamari certificați permanent
                </li>
              </ul>
              <button className="fac-btn">REZERVĂ ACUM</button>
            </div>
          </div>

        </div>
      </div>

      <hr className="page-divider" />

      <div className="section" id="abonamente">
        <div className="section-header">
          <div>
            <div className="section-label">Abonamente</div>
            <h2 className="section-title">ALEGE <span className="purple">PLANUL TĂU</span></h2>
          </div>
          <p className="section-sub">Fără costuri ascunse. Prețuri transparente pentru fiecare buget și stil de viață.</p>
        </div>

        <div className="pricing-grid">

          <div className="price-card">
            <div className="plan-name">STARTER</div>
            <div className="plan-price-row">
              <span className="plan-amount">149</span>
              <span className="plan-unit">RON/lună</span>
            </div>
            <div className="plan-period">Acces sală de forță</div>
            <hr className="plan-divider" />
            <ul className="plan-feats">
              <li className="plan-feat">
                <span className="check-icon">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#a855f7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </span>
                Acces sală de forță
              </li>
              <li className="plan-feat">
                <span className="check-icon">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#a855f7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </span>
                Vestiar + dușuri
              </li>
              <li className="plan-feat">
                <span className="check-icon">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#a855f7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </span>
                Consultanță inițială
              </li>
              <li className="plan-feat">
                <span className="check-icon">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#a855f7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </span>
                Acces app programare
              </li>
            </ul>
            <button className="plan-btn">ALEGE STARTER</button>
          </div>

          <div className="price-card featured">
            <div className="popular-badge">POPULAR</div>
            <div className="plan-name">PRO</div>
            <div className="plan-price-row">
              <span className="plan-amount">249</span>
              <span className="plan-unit">RON/lună</span>
            </div>
            <div className="plan-period">Toate facilitățile incluse</div>
            <hr className="plan-divider" />
            <ul className="plan-feats">
              <li className="plan-feat">
                <span className="check-icon">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#a855f7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </span>
                Sală + Saună + Piscină
              </li>
              <li className="plan-feat">
                <span className="check-icon">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#a855f7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </span>
                Plan nutriție personalizat
              </li>
              <li className="plan-feat">
                <span className="check-icon">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#a855f7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </span>
                4 ședințe PT/lună
              </li>
              <li className="plan-feat">
                <span className="check-icon">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#a855f7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </span>
                Acces App Premium
              </li>
              <li className="plan-feat">
                <span className="check-icon">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#a855f7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </span>
                -20% la preparatele dietetice
              </li>
            </ul>
            <button className="plan-btn">ALEGE PRO</button>
          </div>

          <div className="price-card">
            <div className="plan-name">ELITE</div>
            <div className="plan-price-row">
              <span className="plan-amount">399</span>
              <span className="plan-unit">RON/lună</span>
            </div>
            <div className="plan-period">Experiența completă premium</div>
            <hr className="plan-divider" />
            <ul className="plan-feats">
              <li className="plan-feat">
                <span className="check-icon">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#a855f7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </span>
                Acces complet 24/7
              </li>
              <li className="plan-feat">
                <span className="check-icon">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#a855f7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </span>
                Nutriționist personal
              </li>
              <li className="plan-feat">
                <span className="check-icon">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#a855f7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </span>
                PT nelimitat
              </li>
              <li className="plan-feat">
                <span className="check-icon">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#a855f7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </span>
                Prioritate la rezervări
              </li>
              <li className="plan-feat">
                <span className="check-icon">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#a855f7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </span>
                Saună privată nelimitată
              </li>
            </ul>
            <button className="plan-btn">ALEGE ELITE</button>
          </div>

        </div>
      </div>

      <hr className="page-divider" />

      <div className="section">
        <div className="section-header">
          <div>
            <div className="section-label">Orar</div>
            <h2 className="section-title">PROGRAM <span className="purple">SĂPTĂMÂNAL</span></h2>
          </div>
          <p className="section-sub">Deschis 7 zile pe săptămână pentru a se potrivi oricărui program.</p>
        </div>

        <div className="sch-grid">

          <div className="sch-card sala">
            <div className="sch-head">
              <div className="sch-ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 4v16M18 4v16M3 8h3M18 8h3M3 16h3M18 16h3M6 12h12" />
                </svg>
              </div>
              <div className="sch-title">Sală de sport</div>
            </div>
            <div className="sch-row">
              <span className="sch-day">Luni – Vineri</span>
              <span className="sch-time">06:00 – 22:00</span>
              <span className="sch-badge status-open">Deschis</span>
            </div>
            <div className="sch-row">
              <span className="sch-day">Sâmbătă</span>
              <span className="sch-time">08:00 – 20:00</span>
              <span className="sch-badge status-open">Deschis</span>
            </div>
            <div className="sch-row">
              <span className="sch-day">Duminică</span>
              <span className="sch-time">09:00 – 18:00</span>
              <span className="sch-badge status-amber">Redus</span>
            </div>
            <div className="sch-row">
              <span className="sch-day">Sărbători</span>
              <span className="sch-time">10:00 – 16:00</span>
              <span className="sch-badge status-amber">Redus</span>
            </div>
          </div>

          <div className="sch-card sauna">
            <div className="sch-head">
              <div className="sch-ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f0aa28" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2c0 3-3 4-3 7a3 3 0 006 0c0-3-3-4-3-7z" />
                  <path d="M7 13c0 2.76 2.24 5 5 5s5-2.24 5-5" />
                  <path d="M5 20h14" />
                </svg>
              </div>
              <div className="sch-title">Saună</div>
            </div>
            <div className="sch-row">
              <span className="sch-day">Luni – Vineri</span>
              <span className="sch-time">10:00 – 21:00</span>
              <span className="sch-badge status-open">Deschis</span>
            </div>
            <div className="sch-row">
              <span className="sch-day">Sâmbătă</span>
              <span className="sch-time">09:00 – 20:00</span>
              <span className="sch-badge status-open">Deschis</span>
            </div>
            <div className="sch-row">
              <span className="sch-day">Duminică</span>
              <span className="sch-time">10:00 – 17:00</span>
              <span className="sch-badge status-amber">Redus</span>
            </div>
            <div className="sch-row">
              <span className="sch-day">Privată</span>
              <span className="sch-time">La rezervare</span>
              <span className="sch-badge status-open">Activ</span>
            </div>
          </div>

          <div className="sch-card piscina">
            <div className="sch-head">
              <div className="sch-ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 12c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
                  <path d="M2 17c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
                  <path d="M8 7l2-4 2 1.5L14 7" />
                </svg>
              </div>
              <div className="sch-title">Piscină</div>
            </div>
            <div className="sch-row">
              <span className="sch-day">Luni – Vineri</span>
              <span className="sch-time">06:30 – 21:30</span>
              <span className="sch-badge status-open">Deschis</span>
            </div>
            <div className="sch-row">
              <span className="sch-day">Sâmbătă</span>
              <span className="sch-time">08:00 – 19:00</span>
              <span className="sch-badge status-open">Deschis</span>
            </div>
            <div className="sch-row">
              <span className="sch-day">Duminică</span>
              <span className="sch-time">09:00 – 17:00</span>
              <span className="sch-badge status-amber">Redus</span>
            </div>
            <div className="sch-row">
              <span className="sch-day">Cursuri înot</span>
              <span className="sch-time">Ma / Jo / Sa</span>
              <span className="sch-badge status-open">Activ</span>
            </div>
          </div>

        </div>
      </div>

      <hr className="page-divider" />

      <div className="cta-strip">
        <div className="cta-text">
          <div className="label">Ai întrebări?</div>
          <h3>CONTACTEAZĂ <span>ECHIPA</span></h3>
        </div>
        <div className="cta-contact">
          <div className="cta-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h12v10H2zM2 3l6 5 6-5" /></svg>
            contact@nutripro.ro
          </div>
          <div className="cta-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 10.5l-2-2a1 1 0 00-1.4 0l-.8.8a8.1 8.1 0 01-3.6-3.6l.8-.8a1 1 0 000-1.4l-2-2A1 1 0 003 2l-.5.5C1.5 3.5 2 6.5 5 9.5s6 3.5 7 2.5l.5-.5a1 1 0 000-1.4z" /></svg>
            +40 700 000 000
          </div>
          <div className="cta-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6c0-2.485-2.015-4.5-4.5-4.5z" /><circle cx="8" cy="6" r="1.5" /></svg>
            Târgu Mureș, str. Exemplu 1
          </div>
        </div>
        <div>
          <a href="#abonamente" className="btn-primary">ABONAMENTE →</a>
          <a href="#facilitati" className="btn-outline">FACILITĂȚI</a>
        </div>
      </div>
    </>
  );
}

export default Gympage