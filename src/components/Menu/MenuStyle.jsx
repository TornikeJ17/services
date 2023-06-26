import styled from "styled-components";

export const Container = styled.div`
  width: 1550px;
  max-width: 100%;
  
  .ui-segment {
    background: rgb(220, 237, 247);
    box-shadow: none;
    border: none;
    border-radius: 0px 0px 4px 4px;
  }
  .ui-segment .ui-box {
    display: flex;
    align-items: center;
  }
`;
export const LogoContainer = styled.div`
  width: 20%;
  color: #222;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  
`;

export const LinkContainer = styled.div`
  width: 60%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  padding: 20px;
  
  a {
    color: #222;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    font-family: "BPG Nino Mtavruli", sans-serif;
  }
`;

export const LoginContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  a {
    color: #222;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
  }
`;
export const Logo = styled.img`
  width: 100px;
  position:absolute;
  top: 0;
`;