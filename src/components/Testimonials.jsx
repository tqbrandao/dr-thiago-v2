import React from "react";
import classes from "./Testimonials.module.css";
import { HiUserGroup } from "react-icons/hi2";
import SliderTestimonials from "./UI/Slider/SliderTestimonials";

function Testimonials() {
  return (
    <section className={classes["section-testimonials"]}>
      <div className={classes.testimonials}>
        <h1 className={classes["testimonials-heading"]}>
          <HiUserGroup />
          <span className={classes["heading-text"]}>Depoimentos</span>
        </h1>
        <div className={classes["testimonials-container"]}>
          {/* <div className={classes["google-card"]}></div> */}
          <SliderTestimonials />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
