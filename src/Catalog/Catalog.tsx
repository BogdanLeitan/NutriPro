import Header from "../Components/Header/Header.tsx";
import Footer from "../Components/Footer/Footer.tsx";
import Foodcard from "./Components/Foodcard.tsx";
//import BannerSection from "../Components/BsannerSection/BannerSection.tsx";

import "./catalog.css"

function Catalog() {
  return (
    <>
      <Header />
      
      <div id="mancareSectiune">
        <h1 id="textSectiune">MANCARE DIETETICA</h1>

        <div id="allSection">
          <Foodcard title={"Paste cu carne de pui"} photo={"Mancare1"} oldPrice={"37,99 RON"} newPrice={"32,00 RON"} />
          <Foodcard title={"Carne de pui cu legume"} photo={"Mancare2"} oldPrice={"34,99 RON"} newPrice={"28,00 RON"} />
          <Foodcard title={"Peste la cuptor cu legume"} photo={"Mancare3"} oldPrice={"34,99 RON"} newPrice={"28,00 RON"} />
          <Foodcard title={"Carne de pui cu mazare"} photo={"Mancare4"} oldPrice={"34,99 RON"} newPrice={"28,00 RON"} />
          <Foodcard title={"Carne de peste cu legume"} photo={"Mancare5"} oldPrice={"34,99 RON"} newPrice={"28,00 RON"} />
          <Foodcard title={"Carne de porc cu legume"} photo={"Mancare6"} oldPrice={"34,99 RON"} newPrice={"28,00 RON"} />
          <Foodcard title={"Carne de porc cu legume"} photo={"Mancare7"} oldPrice={"34,99 RON"} newPrice={"28,00 RON"} />
          <Foodcard title={"Carne de vita cu legume"} photo={"Mancare8"} oldPrice={"34,99 RON"} newPrice={"28,00 RON"} />
          <Foodcard title={"Orez cu carne de pui"} photo={"Mancare9"} oldPrice={"34,99 RON"} newPrice={"28,00 RON"} />
          <Foodcard title={"Carne de pui cu legume"} photo={"Mancare10"} oldPrice={"34,99 RON"} newPrice={"28,00 RON"} />
        </div>

        <div id="mancareSectiune">
          <h1 id="textSectiune">BATOANE PROTEICE</h1>

          <div id="allSection">
            <Foodcard title={"Baton cu caramel"} photo={"Baton1"} oldPrice={"7,99 RON"} newPrice={"5,00 RON"} />
            <Foodcard title={"Baton cu banane"} photo={"Baton2"} oldPrice={"7,00 RON"} newPrice={"5,00 RON"} />
            <Foodcard title={"Baton cu ciocolata"} photo={"Baton3"} oldPrice={"7,99 RON"} newPrice={"5,00 RON"} />
          </div>
        </div>

        <div id="mancareSectiune">
          <h1 id="textSectiune">SHAKEURI PROTEICE</h1>

          <div id="allSection">
            <Foodcard title={"Shake cu capsune"} photo={"Shake1"} oldPrice={"13,00 RON"} newPrice={"10,00 RON"} />
            <Foodcard title={"Shake cu banane"} photo={"Shake2"} oldPrice={"13,00 RON"} newPrice={"10,00 RON"} />
            <Foodcard title={"Shake cu caramel"} photo={"Shake3"} oldPrice={"13,00 RON"} newPrice={"10,00 RON"} />
            <Foodcard title={"Shake cu ciocolata"} photo={"Shake4"} oldPrice={"13,00 RON"} newPrice={"10,00 RON"} />
            </div>
          </div>
        </div>
        <Footer />
      </>
      );
}

export default Catalog