import React from "react";
import styled from "styled-components";
import DateIcon from "../../assets/hero_20x20.png";
import FlowerImage from "../../assets/hero_shape.png";

const ContentWrapper = styled.div`
  margin-top: 10em;
  margin-left: 8em;
`;

const Date = styled.div`
  display: flex;
  flex-direction: row;
`;

const CoupleName = styled.h1`
  font-family: "PlayFair Display";
  color: white;

  > i {
    font-size: 0.7em;
  }
`;

const ContentText = styled.p`
  color: white;
`;

const Flower = styled.img`
  transform: rotate(15deg) translate(-9px, -1px);
  z-index: -12;
`;

const DateIconImage = styled.img`
  @media (min-width: 850px) {
    transform: translate(-4px, 16px);
  }
`;
const Content = () => {
  return (
    <ContentWrapper>
      <Date>
        <DateIconImage src={DateIcon} width='27px' height='27px' />
        <ContentText>January 23</ContentText>
      </Date>
      <CoupleName>
        Dennis <i>&</i> Judith
        <Flower src={FlowerImage} />
      </CoupleName>
      <ContentText>Will get married</ContentText>
    </ContentWrapper>
  );
};

export default Content;
