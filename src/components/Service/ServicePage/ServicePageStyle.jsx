import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  top: 60px;
  width: 1550px;
  max-width: 100%;
  height: 100vh;
  justify-content: space-between;
  .ui-button {
    background: rgb(220, 237, 247);
    color: #222;
  }
`;
export const Title = styled.div`
  font-family: "BPG Nino Mtavruli", sans-serif;
  font-size: 24px;
`;
export const ItemsContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
  width: 70%;
`;

export const ItemTitles = styled.h4`
  margin-top: 5px;
  margin-bottom: 5px;
  font-family: "BPG Nino Mtavruli", sans-serif;
`;

export const LinkItems = styled.a`
  font-size: 20px;
  font-weight: 600;
  font-family: "BPG Nino Mtavruli", sans-serif;
  text-decoration: underline;
`;

export const CategoryBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
