import React, { useState, useEffect } from "react";
import style from "@components/Trip.module.scss";
import ImageData from "../data/ImageData";
import WeatherData from "../data/WeatherData";
import Map from "./MapApi";

function Trip() {
  const scrollBoxes = document.querySelectorAll(".scroll");
  const threshold = 0.9;

  window.addEventListener("scroll", () => {
    scrollBoxes.forEach((scrollBox) => {
      const boxTop = scrollBox.getBoundingClientRect().top;
      const boxBottom = scrollBox.getBoundingClientRect().bottom;
      const isVisible =
        boxTop < window.innerHeight * threshold && boxBottom > 0;

      if (isVisible) {
        scrollBox.classList.add(`${style.active}`);
      }
    });
  });

  const [visibleText, setVisibleText] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      setVisibleText(true);
    });
  }, []);

  const [visibleTextPc, setVisibleTextPc] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      setVisibleTextPc(true);
    });
  }, []);

  return (
    <div className={style.main}>
      <article>
        <img src={ImageData[0].image1} alt={ImageData[0].destination} />
        <h2>Mon Gros Titre</h2>
        <p
          className={`scroll ${style.text} ${style.hiddenText} ${
            visibleText ? style["visible-text"] : ""
          }`}
        >
          {ImageData[0].texte3}
        </p>
      </article>
      <article>
        <Map position={[48.858093, 2.2946944]} className={style.map} />
        <p
          className={`scroll ${style.text} ${style.hiddenText} ${
            visibleText ? style["visible-text"] : ""
          }`}
        >
          {ImageData[0].texte}
        </p>
      </article>
      <article>
        <img
          className={style.weather}
          src={WeatherData[0].image}
          alt={WeatherData[0].destination}
        />
        <img
          className={style.weather}
          src={WeatherData[1].image}
          alt={WeatherData[0].destination}
        />
        <img
          className={style.weather}
          src={WeatherData[0].image}
          alt={WeatherData[0].destination}
        />
        <img
          className={style.weather}
          src={WeatherData[3].image}
          alt={WeatherData[0].destination}
        />
        <img
          className={style.weather}
          src={WeatherData[4].image}
          alt={WeatherData[0].destination}
        />
        <img
          className={style.weather}
          src={WeatherData[5].image}
          alt={WeatherData[0].destination}
        />
        <img
          className={style.weather}
          src={WeatherData[2].image}
          alt={WeatherData[0].destination}
        />
        <p
          className={`scroll ${style["text-weather"]} ${style.text} ${
            style.hiddenText
          } ${(visibleText, visibleTextPc ? style["visible-text-pc"] : "")}`}
        >
          Voici la météo des 7 prochains jours de votre potentielle destination.
        </p>
      </article>
    </div>
  );
}

export default Trip;
