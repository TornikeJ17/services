import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        width: 1920px;
        max-width: 100%;
        margin:0;
        padding:0;
        font-family: 'Roboto', sans-serif;
        background: rgb(249, 249, 249);
    }
    a{
        text-decoration:none;
    }
    ul{
        list-style:none;
        padding:0;
        margin:0;
    }
    li{
        list-style:none;
    }
    button{
        border:none;
        outline:none;
        cursor:pointer;
    }
    input{
        border:none;
        outline:none;
    }
    
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  background: #f9f9f9;
  position: relative;
`;
export const ChatButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    fill: #f7b829;
  }
`;
