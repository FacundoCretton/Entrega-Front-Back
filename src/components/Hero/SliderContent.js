import React from "react";

function SliderContent({ activeIndex, sliderImage, onClick }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
          onClick={onClick} 
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <div className="slide-overlay">
            <h2 className="slide-title">{slide.title}</h2>
            <h3 className="slide-text">{slide.description}</h3>
            {/* <button className="slide-button" onClick={() => handleButtonClick(slide)}>
              Ver más
            </button> */}
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
