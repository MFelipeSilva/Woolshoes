import React, { ReactNode, useRef, useState } from "react";

import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";

import { CardCarousel, CarouselButton } from "./styles";

interface CarouselProps {
  children: ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const carouselRef = useRef<any>(null);

  const [showNextButton, setShowNextButton] = useState(true);
  const [showPrevButton, setShowPrevButton] = useState(false);

  const numberOfSlides = 4;

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  const handleCarouselChange = (current: number) => {
    if (current === numberOfSlides - 1) {
      setShowNextButton(false);
      setShowPrevButton(true);
    } else if (current === 0) {
      setShowNextButton(true);
      setShowPrevButton(false);
    } else {
      setShowNextButton(true);
      setShowPrevButton(true);
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    afterChange: handleCarouselChange,
    slidesToShow: 1.6,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: showNextButton ? (
      <CarouselButton
        onClick={next}
        shape="circle"
        icon={<IoArrowForward fontSize="16pt" />}
      />
    ) : undefined,
    prevArrow: showPrevButton ? (
      <CarouselButton
        onClick={prev}
        shape="circle"
        icon={<IoArrowBackOutline fontSize="16pt" />}
      />
    ) : undefined,
  };

  return (
    <CardCarousel ref={carouselRef} {...settings}>
      {children}
    </CardCarousel>
  );
};
