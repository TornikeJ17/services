import styled from "styled-components";

export const Container = styled.div`
  .ui-flex {
    width: 1550px;
    max-width: 100%;
    align-items: center;
  }
  .accordionBlock {
    margin-bottom: 20px;
  }
`;
export const AboutContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;
`;
export const Title = styled.div`
  font-family: "BPG Nino Mtavruli", sans-serif;
  font-size: 24px;
  :before {
    content: "";
    display: inline-flex;
    width: 30px;
    height: 3px;
    background: rgb(196, 49, 75);
    position: relative;
    top: -8px;
    right: 13px;
  }
`;
export const Blocks = styled.div`
  width: 1000px;
  max-width: 100%;
`;
