import { useRef } from "react";
import Eventcard from "./Eventcard/Eventcard.tsx";
import Header from "../Components/Header/Header.tsx";
import Footer from "../Components/Footer/Footer.tsx";
import "./eventspage.css"

function Eventspage() {
  const useFutureEv = useRef<HTMLDivElement | null>(null);
  const usePastEv = useRef<HTMLDivElement | null>(null);
  const useButton1 = useRef<HTMLButtonElement | null>(null);
  const useButton2 = useRef<HTMLButtonElement | null>(null);

  function displayEvents(): any {
    if (useFutureEv.current && usePastEv.current && useButton1.current && useButton2.current) {
      useFutureEv.current.style.display = "flex";
      usePastEv.current.style.display = "none";
      useButton1.current.style.borderBottom = "3px solid #dc1e3c";
      useButton2.current.style.borderBottom = "none";
    }
  }

  function displayEvents2(): any {
    if (useFutureEv.current && usePastEv.current && useButton1.current && useButton2.current) {
      useFutureEv.current.style.display = "none";
      usePastEv.current.style.display = "flex";
      useButton1.current.style.borderBottom = "none";
      useButton2.current.style.borderBottom = "3px solid #dc1e3c";
    }
  }

  return (
    <>
      <Header />
      <section id="evenimente">
        <div className="section-badge">Participări</div>
        <h2 className="section-title">Evenimente <span>&amp; Acțiuni</span></h2>
        <p className="section-sub">Suntem prezenți la târguri, expoziții și evenimente locale pentru a aduce mâncarea sănătoasă mai aproape de comunitate.</p>

        <div className="events-tabs">
          <button className="tab-btn active" ref={useButton1} onClick={displayEvents}>Viitoare</button>
          <button className="tab-btn" ref={useButton2} onClick={displayEvents2}>Participări anterioare</button>
        </div>

        <div className="tab-panel active events-grid" id="tab-upcoming" ref={useFutureEv}>
          <Eventcard luna={"MAR"} status={"Confirmat"} 
            data={"23-24 Martie 2026"} judet={"Beclean"} 
            title={"Târgul firmelor de exercitiu"} 
            descriere={"Expoziție dedicată prezentari materialelor de promovare ale firmei de exercitiu (website)"} 
            about={["Degustare", "Nutriție", "Stand propriu"]} />
          
          <Eventcard luna={"MAR"} 
            status={"Confirmat"} data={"22 Mai 2026"} judet={"Cluj-Napoca"} 
            title={"Târgul de Primăvară al firmelor de exercitiu"} 
            descriere={"Prezentarea materialelor de promovare ale firmei (website, prezentare PPTX, imaginea firmei)"} 
            about={["Fitness", "Sportivi", "Proteic"]} />
        </div>

        <div className="tab-panel events-grid" id="tab-past" ref={usePastEv}>
          <Eventcard luna={"NOV"} status={"Confirmat"} data={"15 Decembrie 2025"} judet={"Satu Mare"} title={"Lansarea firmelor de exercitiu"} descriere={"Expoziție dedicată produselor naturale și stilului de viață sănătos. Vom prezenta întreaga gamă de preparate dietetice cu degustare gratuită."} about={["Degustare", "Nutriție", "Stand propriu"]} />
          <Eventcard luna={"FEB"} status={"Confirmat"} data={"10 Februarie 2026"} judet={"Satu Mare"} title={"Bussines Plan"} descriere={"Prezentarea planului de afacere in fata juriului si raspunderea la intrebari referitoare la activitate"} about={["Fitness", "Sportivi", "Proteic"]} />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Eventspage