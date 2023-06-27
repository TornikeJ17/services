import React from "react";
import {
  Container,
  BlockOne,
  BlockTwo,
  Image,
  LinksBlock,
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
      </BlockOne>
      <BlockTwo>
        <LinksBlock>
          <Link to="#">
            <LinkedInIcon size="large"/>
          </Link>
          <Link to="#">
            <SkypeColorIcon size="large"/>
          </Link>
          <Link to="#">
            <TwitterIcon size="large"/>
          </Link>
        </LinksBlock>
      </BlockTwo>
    </Container>
  );
};
export default Footer;
