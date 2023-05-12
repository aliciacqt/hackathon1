import Carousel from "./Carousel";
import "./Presentation.css";

export default function Presentation() {
  return (
    <div>
      <p className="p-4 text-2xl m-2 text-blue text-center leading-8 presentation ">
        Bienvenue sur mon site Internet dédié à mes vacances! Préparez-vous à
        vous évader virtuellement vers des destinations exotiques, à vous
        imprégner de cultures fascinantes et à vous laisser inspirer par la
        beauté du monde. Bonne découverte !
      </p>
      <Carousel />
    </div>
  );
}
