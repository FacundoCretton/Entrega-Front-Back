import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import sliderImage from "./sliderImage";
import "./slider.css";

const len = sliderImage.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused]);

  const pauseAnimation = () => {
    setIsPaused(true);

    setTimeout(() => {
      setIsPaused(false);
    }, 15000); 
  };

  const handleSlideClick = () => {
    pauseAnimation();
  };

  const handlePrevSlide = () => {
    pauseAnimation();
    setActiveIndex((prevIndex) => (prevIndex === 0 ? len : prevIndex - 1));
  };

  const handleNextSlide = () => {
    pauseAnimation();
    setActiveIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index) => {
    pauseAnimation();
    setActiveIndex(index);
  };

  return (
    <div className="slider-container">
      <SliderContent
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onClick={handleSlideClick}
      />
      <Arrows prevSlide={handlePrevSlide} nextSlide={handleNextSlide} />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={handleDotClick}
      />
    </div>
  );
}

export default Slider;
