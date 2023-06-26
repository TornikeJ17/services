import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;
  .custom-tree-title {
    isplay: flex;
    flex-flow: row;
    justify-content: space-between;
    padding: 10px;
    position: relative;
    width: 100%;
  }
  .ui-button {
    background: rgb(220, 237, 247);
    color: #222;
    border-radius: 4px;
    font-family: "BPG Nino Mtavruli", sans-serif;
  }
`;
export const Title = styled.div`
  width: 250px;
  max-width: 100%;
  background: #dcedf7;
  border-radius: 4px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  font-family: "BPG Nino Mtavruli", sans-serif;
`;
export const Button = styled.div`
  margin: 10px;
`;
export const MenuContainer = styled.div`
  width: 250px;
  max-width: 100%;
  background: #dcedf7;
  border-radius: 4px;
  transition: left 0.3s ease;
  .accordion {
    font-family: "BPG Nino Mtavruli", sans-serif;
    .ui-accordion__content {
      display: flex;
      flex-flow: column;
    }
  }
`;

export const CloseButton = styled.div`
  padding: 10px;
  position: absolute;
  right: -25px;
  top: 0;
  width: 25px;
  background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
