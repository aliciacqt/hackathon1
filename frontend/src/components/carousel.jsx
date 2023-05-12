import React, { useState } from "react";
import images from "../data/ImageData";

import "./carousel.scss";

function Carousel() {
  const [selected, setSelected] = useState(3); // index of initially selected item
  // const images = [
  //   "/src/assets/photos/japoncar.jpg",
  //   "/src/assets/photos/svalbardcar.jpg",
  //   "/src/assets/photos/morbihancar.jpg",
  //   "/src/assets/photos/edimbourgcar.jpg",
  //   "/src/assets/photos/route66.jpg",
  //   "/src/assets/photos/japon1.jpg",
  //   "/src/assets/photos/svalbard1.jpg",
  // ];

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
      <section>
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
              <p className="bg-blue rounded-md p-2 md:opacity-30 hover:opacity-100 opacity-0 max-sm:hidden">
                {image.texte4}
              </p>
            </div>
          </div>
        ))}
        <div className="hideLeft">
          <img src={images[images.length - 1]} width={200} />
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
      </div>
    </main>
  );
}

export default Carousel;
