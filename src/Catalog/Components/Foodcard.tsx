import Mancare1 from "../../assets/poze mancare/mancare1.webp"
import Mancare2 from "../../assets/poze mancare/mancare2.webp"
import Mancare3 from "../../assets/poze mancare/mancare3.webp"
import Mancare4 from "../../assets/poze mancare/mancare4.webp"
import Mancare5 from "../../assets/poze mancare/mancare5.webp"
import Mancare6 from "../../assets/poze mancare/mancare6.webp"
import Mancare7 from "../../assets/poze mancare/mancare7.webp"
import Mancare8 from "../../assets/poze mancare/mancare8.webp"
import Mancare9 from "../../assets/poze mancare/mancare9.webp"
import Mancare10 from "../../assets/poze mancare/mancare10.webp"

import Baton1 from "../../assets/poze mancare/baton1.webp"
import Baton2 from "../../assets/poze mancare/baton2.webp"
import Baton3 from "../../assets/poze mancare/baton3.webp"

import Shake1 from "../../assets/poze mancare/shake1.webp"
import Shake2 from "../../assets/poze mancare/shake2.webp"
import Shake3 from "../../assets/poze mancare/shake3.webp"
import Shake4 from "../../assets/poze mancare/shake4.webp"

import "./foodCard.css"

function Foodcard(props: any) {
  return (
    <>
      <div className="mancare" >
        <img id="mancareImg" src={setPhoto(props.photo)} />
        <h1 id="titluProdus">{props.title}</h1>
        <h1 id="pretVechi">{props.oldPrice}</h1>
        <h1 id="pretNou">{props.newPrice}</h1>
        <div id="reducere"><h1 id="reducereText">-20%</h1></div>
      </div>
    </>
  );
}

function setPhoto(photo: string){
  switch(photo){
    case "Mancare1": return Mancare1; break;
    case "Mancare2": return Mancare2; break;
    case "Mancare3": return Mancare3; break;
    case "Mancare4": return Mancare4; break;
    case "Mancare5": return Mancare5; break;
    case "Mancare6": return Mancare6; break;
    case "Mancare7": return Mancare7; break;
    case "Mancare8": return Mancare8; break;
    case "Mancare9": return Mancare9; break;
    case "Mancare10": return Mancare10; break;
    case "Baton1": return Baton1; break;
    case "Baton2": return Baton2; break;
    case "Baton3": return Baton3; break;
    case "Shake1": return Shake1; break;
    case "Shake2": return Shake2; break;
    case "Shake3": return Shake3; break;
    case "Shake4": return Shake4; break;
  }
}

export default Foodcard