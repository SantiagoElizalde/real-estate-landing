import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Carousel = ({ imagesList = [], containerClasses }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div id="Carousel" className={`${containerClasses}`}>
      <img
        alt={"a"}
        src={imagesList[currentImage]}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      {imagesList.length > 1 ? (
        <>
          <button
            className="absolute left-0 text-3xl h-full top-0 px-2 text-lighter opacity-80"
            onClick={() =>
              setCurrentImage((prevImgPos) =>
                prevImgPos == 0 ? imagesList.length - 1 : prevImgPos - 1
              )
            }
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button
            className="absolute right-0 text-3xl h-full top-0 px-2 text-lighter opacity-80"
            onClick={() =>
              setCurrentImage((prevImgPos) =>
                imagesList.length - 1 == prevImgPos ? 0 : prevImgPos + 1
              )
            }
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <div
            className={`absolute left-1 bottom-1 flex flex-row gap-1 h-5 items-center p-1`}
          >
            {imagesList.length > 0
              ? imagesList.map((img, i) => (
                  <button
                    key={i}
                    className={`h-2 w-2 rounded-full hover:scale-100 transition flex-none
                      ${i == currentImage ? `bg-primary scale-105` : `bg-white opacity-80 scale-90`}
                    `}
                    onClick={() => setCurrentImage(i)}
                  ></button>
                ))
              : ""}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Carousel;
