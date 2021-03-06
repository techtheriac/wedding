import styled from "styled-components";

const Link = styled.a`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: wheat;
  text-decoration: none;
  transition: color 0.3s linear;

  @media (max-width: "576px") {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: "#343078";
  }
`;

const StyledMenu = styled.nav`
  flex-direction: column;
  justify-content: center;
  background: #33391b;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  display: ${({ open }) => (open ? "flex" : "none")};
  z-index: 1;
  overflow: hidden;

  @media (max-width: "576px") {
    width: 100%;
  }
`;

export { StyledMenu, Link };
