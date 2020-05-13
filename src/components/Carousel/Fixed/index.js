import React, { useState, useEffect } from "react";
import { slideInterval } from "commons/values";

import {
  Card,
  Title,
  Description,
  Selector,
  SelectorList,
  CarouselContainer,
} from "./styles";

const Carousel = ({ slides }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((active + 1) % slides.length);
    }, slideInterval);

    return () => clearInterval(timer);
  });

  return (
    <CarouselContainer>
      <Card>
        <Title>{slides[active].name}</Title>
        <Description>{slides[active].gender}</Description>
        <Description>{slides[active].height}</Description>
      </Card>
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
