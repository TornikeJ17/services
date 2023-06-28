import React from "react";
import {
  Container,
  BlockOne,
  BlockTwo,
  Image,
  LinksBlock,
  Text,
  Title
} from "./FooterStyle";
import { Link } from "react-router-dom";
import {
  LinkedInIcon,
  SkypeColorIcon,
  TwitterIcon,
} from "@fluentui/react-icons-northstar";
import logo from "../Menu/img/logo.png";
const Footer = () => {
  return (
    <Container>
      <BlockOne>
        <Image src={logo} />
        <Text>სოციალური სერვისების სააგენტო</Text>
        <Title>Services.ge</Title>
      </BlockOne>
      <BlockTwo>
        <LinksBlock>
          <Link to="#">
            <LinkedInIcon size="large" />
          </Link>
          <Link to="#">
            <SkypeColorIcon size="large" />
          </Link>
          <Link to="#">
            <TwitterIcon size="large" />
          </Link>
          <div>Copyright © 2023 Services.ge All rights reserved</div>
        </LinksBlock>
      </BlockTwo>
    </Container>
  );
};
export default Footer;
