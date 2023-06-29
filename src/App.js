import React, { useState } from "react";
import { Container, GlobalStyle, ChatButton } from "./components/Styles/Styled";
import LandingPage from "./components/LandingPage/LandingPage";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Menu from "./components/Menu/Menu";
import ServicePage from "./components/Service/ServicePage/ServicePage";
import { services, regions } from "./components/api/services";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map";
const App = () => {

  return (
    <Container>
      <GlobalStyle />
      <Menu />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<LandingPage services={services} />} />
          <Route
            path="/map"
            element={<Map services={services} regions={regions} />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/:id" element={<ServicePage service={services} />} />
          <Route path="/contact" element={<Contact services={services} />} />
        </Routes>
      </div>
      <Footer />
    </Container>
  );
};
export default App;
