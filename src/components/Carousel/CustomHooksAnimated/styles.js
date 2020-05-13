import styled from "styled-components";

export const CarouselContainer = styled.div`
  margin: 0 auto;
  background-color: #442f38;
  width: 500px;
  overflow: hidden;
`;

export const CardsContainer = styled.div`
  display: flex;
  position: relative;
  background-color: #442f38;
`;

export const Card = styled.article`
  width: 500px;
  padding: 32px 16px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #e7f9a9;
  margin-bottom: 16px;
`;

export const Description = styled.h3`
  font-size: 24px;
  color: #e7f9a9;
  margin-bottom: 8px;
`;

export const SelectorList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Selector = styled.li`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#E7F9A9" : "#9A9B73")};
  margin-bottom: 8px;
  cursor: pointer;

  + li {
    margin-left: 4px;
  }
`;
