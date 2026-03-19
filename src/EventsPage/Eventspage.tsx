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
          <Eventcard luna={"APR"} status={"Înregistrare deschisă"} data={"12 Aprilie 2026"} judet={"Târgu Mureș"} title={"Târgul de Primăvară – Sănătate &amp; Nutriție"} descriere={"Expoziție dedicată produselor naturale și stilului de viață sănătos. Vom prezenta întreaga gamă de preparate dietetice cu degustare gratuită."} about={["Degustare", "Nutriție", "Stand propriu"]} />
          <Eventcard luna={"MAI"} status={"Confirmat"} data={"3–5 Mai 2026"} judet={"Cluj-Napoca"} title={"Fitness Expo Cluj 2026"} descriere={"Cel mai mare eveniment de fitness din Transilvania. Prezentăm liniile de meniu pentru sportivi cu focus pe macro-nutrienți și preparare rapidă."} about={["Fitness", "Sportivi", "Proteic"]} />
          <Eventcard luna={"IUN"} status={"În pregătire"} data={"21 Iunie 2026"} judet={"Târgu Mureș"} title={"Ziua Orașului – Food Festival"} descriere={"Festival gastronomic în centrul orașului. Participăm cu un stand dedicat unde prezentăm alternativele dietetice la mâncărurile tradiționale."} about={["Festival", "Street food", "Comunitate"]} />
        </div>

        <div className="tab-panel events-grid" id="tab-past" ref={usePastEv}>
          <Eventcard luna={"APR"} status={"Înregistrare deschisă"} data={"12 Aprilie 2026"} judet={"Târgu Mureș"} title={"Târgul de Primăvară – Sănătate &amp; Nutriție"} descriere={"Expoziție dedicată produselor naturale și stilului de viață sănătos. Vom prezenta întreaga gamă de preparate dietetice cu degustare gratuită."} about={["Degustare", "Nutriție", "Stand propriu"]} />
          <Eventcard luna={"MAI"} status={"Confirmat"} data={"3–5 Mai 2026"} judet={"Cluj-Napoca"} title={"Fitness Expo Cluj 2026"} descriere={"Cel mai mare eveniment de fitness din Transilvania. Prezentăm liniile de meniu pentru sportivi cu focus pe macro-nutrienți și preparare rapidă."} about={["Fitness", "Sportivi", "Proteic"]} />
          <Eventcard luna={"IUN"} status={"În pregătire"} data={"21 Iunie 2025"} judet={"Târgu Mureș"} title={"Ziua Orașului – Food Festival"} descriere={"Festival gastronomic în centrul orașului. Participăm cu un stand dedicat unde prezentăm alternativele dietetice la mâncărurile tradiționale."} about={["Festival", "Street food", "Comunitate"]} />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Eventspage