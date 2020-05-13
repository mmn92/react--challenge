import React, { useState, useEffect } from "react";
import { slideInterval } from "commons/values";

import {
  CardsContainer,
  Card,
  Title,
  Description,
  Selector,
  SelectorList,
  CarouselContainer,
} from "./styles";

const cardSize = 500;

const Carousel = ({ slides }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((active + 1) % slides.length);
    }, slideInterval);

    return () => clearInterval(timer);
  });

  const containerWidth = slides.length * cardSize;

  const style = {
    transform: `translateX(-${active * cardSize}px)`,
    width: `${containerWidth}px`,
    transition: "transform 0.4s linear",
  };

  return (
    <CarouselContainer>
      <CardsContainer size={slides.length} style={style}>
        {slides.map((item, index) => (
          <Card key={index}>
            <Title>{item.name}</Title>
            <Description>{item.gender}</Description>
            <Description>{item.height}</Description>
          </Card>
        ))}
      </CardsContainer>
      <SelectorList>
        {slides.map((_, index) => (
          <Selector
            active={active === index}
            key={index}
            onClick={() => setActive(index)}
          ></Selector>
        ))}
      </SelectorList>
    </CarouselContainer>
  );
};

export default Carousel;
