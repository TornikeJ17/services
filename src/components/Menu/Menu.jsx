import React from "react";
import {
  Container,
  LogoContainer,
  LinkContainer,
  LoginContainer,
  Logo,
} from "./MenuStyle";
import { Link } from "react-router-dom";
import { Segment } from "@fluentui/react-northstar";
import logo from "./img/logo.png";
const Menu = () => {
  return (
    <Container>
      <Segment
        content={
          <>
            <LogoContainer>
              <Logo src={logo} />
            </LogoContainer>
            <LinkContainer>
              <Link to="/">სერვისები</Link>
              <Link to="/dashboard">ჩვენს შესახებ</Link>
              <Link to="/contact">კონტაქტი</Link>
            </LinkContainer>
            <LoginContainer>
              <Link to="/dashboard">შესვლა</Link>
            </LoginContainer>
          </>
        }
      />
    </Container>
  );
};

export default Menu;
