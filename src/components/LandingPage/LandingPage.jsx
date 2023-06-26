import React from "react";
import { Container } from "./LandingPageStyle";
import Service from "../Service/Service";

const LandingPage = ({ services }) => {
  return (
    <Container>
        <Service services={services} />
    </Container>
  );
};

export default LandingPage;
