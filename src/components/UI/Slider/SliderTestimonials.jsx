import React, { Component } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import testimonialsData from "../../../../data/testimonials.json";
import Card from "../Card";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

function SliderTestimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => {
          return (
            <div key={index}>
              <Card
                name={testimonial.name}
                text={testimonial.text}
                image={testimonial.image}
                date={testimonial.date}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default SliderTestimonials;
