import React from "react";
import { StyledMenu, Link } from "./Menu.styled";
import { bool } from "prop-types";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link href='/'>home</Link>
      <Link href='/'>about</Link>
      <Link href='/'>gallery</Link>
      <Link href='/'>guestbook</Link>
      <Link href='/'>blog</Link>
      <Link href='/'>contact us</Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
