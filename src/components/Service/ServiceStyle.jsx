import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 1550px;
  justify-content: start;
  max-width: 100%;
  gap: 40px;
  :global {
    .ui-provider .ui-tooltip__content {
      transfrom: ${({ tooltipPosition }) => console.log(tooltipPosition)};
    }
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
  .ui-segment {
    width: 1200px;
    max-width: 100%;
    cursor: pointer;
    height: 110px;
    display: flex;
    align-items: center;
    border-radius: 6px;
    .ui-box {
      display: flex;
      flex-flow: column;
      gap: 10px;
    }
  }
`;

export const BlockForItems = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 30px;
  .ui-flex {
    margin-bottom: 120px;
    
  }
`;

export const SearchBlock = styled.div`
  position: relative;
  width: 100%;
  height: 32px;
  .ui-box {
    position: absolute;
    right: 0;
    background: #fff;
    font-family: "BPG Nino Mtavruli", sans-serif;
  }
`;
export const ServiceTitle = styled.div`
  font-family: "BPG Nino Mtavruli", sans-serif;
  font-size: 18px;
`;
export const ColorContainer = styled.div`
  position: absolute;
  top: 5px;
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: "BPG Nino Mtavruli", sans-serif;
  div {
    display: flex;
    gap: 10px;
    span {
      position: relative;
      top: 2px;
      display: flex;
      align-items: center;
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
  }
`;

export const ItemContainerBlock = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
  .ui-tooltip__content {
    div {
      width: 400px;
      max-width: 100%;
    }
  }
`;
export const ServiceBenefits = styled.div`
  font-family: "BPG Nino Mtavruli", sans-serif;
  font-size: 14px;
  color: #8b8b8b;
`;
