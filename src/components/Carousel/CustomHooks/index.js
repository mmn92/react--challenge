import React from "react";

import {
  CardsContainer,
  Card,
  Title,
  Description,
  Selector,
  SelectorList,
  CarouselContainer,
} from "./styles";

import useCarousel from "../../../hooks/useCarousel";

const Carousel = ({ slides }) => {
  const [active, setActive] = useCarousel(slides.length);

  return (
    <CarouselContainer>
      <CardsContainer>
        <Card>
          <Title>{slides[active].name}</Title>
          <Description>{slides[active].gender}</Description>
          <Description>{slides[active].height}</Description>
        </Card>
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
