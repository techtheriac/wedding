import React, { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Content from "./components/Content";
import Menu from "./components/Menu/Menu";
import Burger from "./components/Burger/Burger";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container />
      <Header />
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <Content />
    </>
  );
};

export default App;
