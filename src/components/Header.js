import React from "react";
import styled from "styled-components";
import HeaderIcon from "../../assets/logo-67x30.png";

const Navigation = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 868px) {
    display: none;
  }
`;

const Link = styled.a`
  color: #666666;
  text-decoration: none;
  text-transform: uppercase;
  padding-left: 1.7em;
  padding-top: 1em;
  font-size: 12px;
  cursor: pointer;
`;

const HeaderContainer = styled.div`
  display: flex;
  padding: 1em;
  width: 100vw;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: white;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src={HeaderIcon}></img>
      <Navigation>
        <Link>home</Link>
        <Link>about</Link>
        <Link>gallery</Link>
        <Link>guestbook</Link>
        <Link>blog</Link>
        <Link>contat us</Link>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
