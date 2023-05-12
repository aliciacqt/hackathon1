import React, { useState } from "react";
import images from "../data/ImageData";

import "./Carousel.scss";

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
      {/* ----------------- carousel version mobile ----------------- */}
      <section className="md:hidden">
        {images.map((image) => (
          <div key={image.id}>
            <img
              className=" md:hidden p-3"
              src={image.imageCar}
              alt={image.destination}
            />

            <div className="flex justify-center p-2 mb-7 ">
              <p className="md:hidden ">{image.texte4}</p>
            </div>
          </div>
        ))}
      </section>
      {/* <Link to={`/trip/${id}`}> */}
      {/* ----------------- carousel version desktop ----------------- */}
      <div className="w-full">
        <div id="carousel">
          {images.map((image, index) => (
            <div key={image.id} className={getClassName(index)}>
              <img
                className="max-sm:hidden"
                src={image.imageCar}
                width={index === selected ? 400 : 200}
                alt={image.destination}
              />

              <div className="flex justify-center  ">
                <p className="bg-blue rounded-md p-2 opacity-30 hover:opacity-100 max-sm:hidden">
                  {image.texte4}
                </p>
              </div>
            </div>
          ))}
          <div className="hideLeft">
            <img src={images[images.length - 1]} width={200} />
          </div>
        </div>
      </div>
      {/* </Link> */}
      <div className="buttons">
        <button
          className="mr-4 bg-blue rounded-md p-2 text-ligthsand max-sm:hidden"
          type="button"
          id="prev"
          onClick={() => moveToSelected("prev")}
        >
          Précédent
        </button>
        <button
          className="bg-blue rounded-md p-2 text-ligthsand max-sm:hidden"
          type="button"
          id="next"
          onClick={() => moveToSelected("next")}
        >
          Suivant
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
