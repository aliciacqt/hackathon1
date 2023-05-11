import React, { useState, useEffect } from "react";
import style from "@components/Trip.module.scss";
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
    <div>
      <article>
        <img
          src="https://en.normandie-tourisme.fr/wp-content/uploads/sites/3/2020/01/8118-Mont-Saint-Michel-couleur-dautomne-%C2%A9-DaLiu-Shutterstock.com-%C2%A9-DaLiu-Shutterstock.com_.jpg"
          alt=""
        />
        <h2>Mon Gros Titre</h2>
        <p
          className={`scroll ${style.text} ${style.hiddenText} ${
            visibleText ? style["visible-text"] : ""
          }`}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          recusandae, maiores ipsa minima nemo fuga illum consectetur incidunt
          pariatur ex odio ratione distinctio soluta repellendus eveniet
          assumenda nesciunt, facilis exercitationem! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Unde eveniet sunt laboriosam autem in,
          tempora corporis asperiores? Aut omnis odit neque voluptas et, dolores
          reprehenderit quis consectetur enim, earum cumque.
        </p>
      </article>
      <article>
        <Map position={[48.858093, 2.2946944]} className={style.map} />
        <p
          className={`scroll ${style.text} ${style.hiddenText} ${
            visibleText ? style["visible-text"] : ""
          }`}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quod vitae
          facere perspiciatis aspernatur officia, ullam vero ipsa libero
          necessitatibus sunt distinctio pariatur! Repellat autem omnis
          consequuntur ipsam provident nesciunt. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam maiores corrupti dolores dicta
          quibusdam veniam magnam nihil velit ullam modi? Repellendus maiores
          aut, voluptatum quasi adipisci at rem voluptate vero.
        </p>
      </article>
      <article>
        <img
          src="https://content.r9cdn.net/rimg/dimg/5d/59/6342cb35-city-45202-16b23d45341.jpg?crop=true&width=1366&height=768&xhint=1912&yhint=1817"
          alt=""
        />
        <p
          className={`scroll ${style.text} ${style.hiddenText} ${
            (visibleText, visibleTextPc ? style["visible-text-pc"] : "")
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          ratione, molestias numquam asperiores nemo unde assumenda maxime
          suscipit inventore, obcaecati totam! Consectetur ducimus fugiat
          voluptate consequuntur corporis neque reprehenderit sit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Possimus totam natus,
          maiores aliquam praesentium itaque dicta corrupti provident optio,
          ipsam accusamus eligendi quasi nobis fugit aperiam velit harum veniam
          eveniet?
        </p>
      </article>
    </div>
  );
}

export default Trip;
