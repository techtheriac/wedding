import React from "react";
import styled from "styled-components";
import DateIcon from "../../assets/hero_20x20.png";

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
`;

const ContentText = styled.p`
  color: white;
`;

const Content = () => {
  return (
    <ContentWrapper>
      <Date>
        <img src={DateIcon} width='20px' height='20px' />
        <ContentText>January 23</ContentText>
      </Date>
      <CoupleName>
        Dennis <i>&</i> Judith
      </CoupleName>
      <ContentText>Will get married</ContentText>
    </ContentWrapper>
  );
};

export default Content;
