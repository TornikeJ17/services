import React from "react";
import { Container,BlockOne,BlockTwo,Image } from "./FooterStyle";
import logo from "../Menu/img/logo.png";
const Footer = () => {
  return (
    <Container>
      <BlockOne>
        <Image src={logo} />
      </BlockOne>
      <BlockTwo></BlockTwo>
    </Container>
  );
};
export default Footer;
