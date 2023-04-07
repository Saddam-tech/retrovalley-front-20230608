import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

const CarouselSlider = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(
    -${(props) => props.activeIndex * (500 / props.images.length)}%
  );
`;

const CarouselSlide = styled.img`
  flex-shrink: 0;
  width: 100%;
`;

const CarouselDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  position: absolute;
  bottom: 50px;
  width: 100%;
`;

const CarouselDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 0.5rem;
  background-color: ${(props) => (props.active ? "#65bc7b" : "#ccc")};
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: #fff;
  }
`;

const Carousel = ({ images, autoplay = false, autoplayDelay = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  useEffect(() => {
    let intervalId;

    if (autoplay) {
      intervalId = setInterval(handleNext, autoplayDelay);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [activeIndex, autoplay, autoplayDelay]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <CarouselWrapper>
      <CarouselSlider activeIndex={activeIndex} images={images}>
        {images.map((image, index) => (
          <CarouselSlide key={index} src={image} alt="carousel image" />
        ))}
      </CarouselSlider>

      {/* <button className="prev" onClick={handlePrev}>
        Prev
      </button>
      <button className="next" onClick={handleNext}>
        Next
      </button> */}

      <CarouselDots>
        {images.map((image, index) => (
          <CarouselDot
            key={index}
            active={index === activeIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </CarouselDots>
    </CarouselWrapper>
  );
};

export default Carousel;
