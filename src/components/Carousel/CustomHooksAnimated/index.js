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

import useCarousel from "../../../hooks/useCarouselAnimated";

const Carousel = ({ slides }) => {
  const [active, setActive, style] = useCarousel(slides.length);

  return (
    <CarouselContainer>
      <CardsContainer style={style}>
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
