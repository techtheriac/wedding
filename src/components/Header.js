import React from "react";
import styled from "styled-components";
import HeaderIcon from "../../assets/logo-67x30.png";

const Navigation = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Link = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  padding-left: 1.7em;
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
