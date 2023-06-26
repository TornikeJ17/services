import React, { useState } from "react";
import { Container, GlobalStyle, ChatButton } from "./components/Styles/Styled";
import LandingPage from "./components/LandingPage/LandingPage";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Menu from "./components/Menu/Menu";
import Chat from "./components/Chat/Chat";
import ServicePage from "./components/Service/ServicePage/ServicePage";
import { services } from "./components/api/services";
import Contact from "./components/contact/Contact";
const App = () => {
  const [chatButton, setChatButton] = useState(false);

  return (
    <Container>
      <GlobalStyle />
      <Menu />
      <Routes>
        <Route path="/" element={<LandingPage services={services}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/:id" element={<ServicePage service={services} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ChatButton onClick={() => setChatButton(!chatButton)}>
        {chatButton ?
        
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="50" height="50"><path d="M24,16v5a3,3,0,0,1-3,3H16a8,8,0,0,1-6.92-4,10.968,10.968,0,0,0,2.242-.248A5.988,5.988,0,0,0,16,22h5a1,1,0,0,0,1-1V16a5.988,5.988,0,0,0-2.252-4.678A10.968,10.968,0,0,0,20,9.08,8,8,0,0,1,24,16ZM17.977,9.651A9,9,0,0,0,8.349.023,9.418,9.418,0,0,0,0,9.294v5.04C0,16.866,1.507,18,3,18H8.7A9.419,9.419,0,0,0,17.977,9.651Zm-4.027-5.6a7.018,7.018,0,0,1,2.032,5.46A7.364,7.364,0,0,1,8.7,16H3c-.928,0-1-1.275-1-1.666V9.294A7.362,7.362,0,0,1,8.49,2.018Q8.739,2,8.988,2A7.012,7.012,0,0,1,13.95,4.051Z" /></svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="50" height="50"><path d="M24,16v5a3,3,0,0,1-3,3H16a8,8,0,0,1-6.92-4,10.968,10.968,0,0,0,2.242-.248A5.988,5.988,0,0,0,16,22h5a1,1,0,0,0,1-1V16a5.988,5.988,0,0,0-2.252-4.678A10.968,10.968,0,0,0,20,9.08,8,8,0,0,1,24,16ZM17.977,9.651A9,9,0,0,0,8.349.023,9.418,9.418,0,0,0,0,9.294v5.04C0,16.866,1.507,18,3,18H8.7A9.419,9.419,0,0,0,17.977,9.651Zm-4.027-5.6a7.018,7.018,0,0,1,2.032,5.46A7.364,7.364,0,0,1,8.7,16H3c-.928,0-1-1.275-1-1.666V9.294A7.362,7.362,0,0,1,8.49,2.018Q8.739,2,8.988,2A7.012,7.012,0,0,1,13.95,4.051Z" /></svg>
        }
      </ChatButton>
      {chatButton ? <Chat /> : null}
    </Container>
  );
}
export default App;