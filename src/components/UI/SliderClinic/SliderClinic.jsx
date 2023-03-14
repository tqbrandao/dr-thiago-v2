import React, { useState } from "react";
import { SliderData } from "../../../../data/sliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import classes from "./SliderClinic.module.css";

function SliderClinic() {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className={classes.slider}>
      <FaArrowAltCircleLeft
        className={classes["left-arrow"]}
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className={classes["right-arrow"]}
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? classes.active : classes.slide}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="Random Alt Text"
                className={classes.image}
              ></img>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SliderClinic;
