import React, { useState } from "react";
import images from "../data/ImageData";

import "./carousel.scss";

function Carousel() {
  const [selected, setSelected] = useState(3); // index of initially selected item
  const [selectedImage, setSelectedImage] = useState(images[selected]);

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
    setSelectedImage(images[selectedIndex]);
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
        {images.map((image, index) => (
          <div
            key={image.id}
            className={getClassName(index)}
            role="button"
            onClick={() => {
              setSelected(index);
              setSelectedImage(images[index]);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setSelected(index);
                setSelectedImage(images[index]);
              }
            }}
            tabIndex="0"
          >
            <img
              src={image.imageCar}
              width={index === selected ? 400 : 200}
              alt={image.destination}
            />
          </div>
        ))}
        <div className="hideLeft">
          <img src={images[images.length - 1]} width={200} />
        </div>
      </div>

      <div className="buttons">
        <button type="button" id="prev" onClick={() => moveToSelected("prev")}>
          Next
        </button>
        <button type="button" id="next" onClick={() => moveToSelected("next")}>
          Prev
        </button>
      </div>

      <div>
        <h2>{selectedImage.destination}</h2>
        <p>{selectedImage.description}</p>
      </div>
    </main>
  );
}

export default Carousel;
