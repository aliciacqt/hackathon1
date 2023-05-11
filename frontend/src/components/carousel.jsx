import React, { useState } from "react";
import "./carousel.scss";

function Carousel() {
  const [selected, setSelected] = useState(3); // index of initially selected item
  const images = [
    "https://i1.sndcdn.com/artworks-000165384395-rhrjdn-t500x500.jpg",
    "https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg",
    "https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg",
    "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg",
    "https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg",
    "https://i1.sndcdn.com/artworks-000108468163-dp0b6y-t500x500.jpg",
    "https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg",
  ];

  const moveToSelected = (element) => {
    let selectedIndex;
    if (element === "next") {
      selectedIndex = selected === images.length - 1 ? 0 : selected + 1;
    } else if (element === "prev") {
      selectedIndex = selected === 0 ? images.length - 1 : selected - 1;
    } else {
      selectedIndex = element;
    }

    setSelected(selectedIndex);
  };
  const getClassName = (index) => {
    if (index === selected) {
      return "selected";
    }
    if (
      index === selected - 1 ||
      (selected === 0 && index === images.length - 1)
    ) {
      return "prev";
    }
    if (
      index === selected - 2 ||
      (selected === 1 && index === images.length - 1) ||
      (selected === 0 && index === images.length - 2)
    ) {
      return "prevLeftSecond";
    }
    if (
      index === selected + 1 ||
      (selected === images.length - 1 && index === 0)
    ) {
      return "next";
    }
    if (
      index === selected + 2 ||
      (selected === images.length - 2 && index === 0) ||
      (selected === images.length - 1 && index === 1)
    ) {
      return "nextRightSecond";
    }
    return "hideRight";
  };

  return (
    <main>
      <div id="carousel">
        {images.map((imageUrl) => (
          <div
            key={imageUrl}
            className={getClassName(images.indexOf(imageUrl))}
          >
            <img
              src={imageUrl}
              width={images.indexOf(imageUrl) === selected ? 400 : 200}
              alt={`${images.indexOf(imageUrl) + 1}`}
            />
          </div>
        ))}
        <div className="hideLeft">
          <img src={images[images.length - 1]} width={200} />
        </div>
      </div>

      <div className="buttons">
        <button type="button" id="prev" onClick={() => moveToSelected("prev")}>
          Prev
        </button>
        <button type="button" id="next" onClick={() => moveToSelected("next")}>
          Next
        </button>
      </div>
    </main>
  );
}

export default Carousel;
