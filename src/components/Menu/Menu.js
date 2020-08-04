import React from "react";
import StyledMenu from "./Menu.styled";
import { bool } from "prop-types";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href='/'>home</a>
      <a href='/'>about</a>
      <a href='/'>gallery</a>
      <a href='/'>guestbook</a>
      <a href='/'>blog</a>
      <a href='/'>contact us</a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
