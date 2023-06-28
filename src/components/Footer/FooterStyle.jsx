import styled from "styled-components";

export const Container = styled.div`
  width: 1550px;
  max-width: 100%;
  background: rgb(220, 237, 247);
  height: 100px;
  border-radius: 4px 4px 0px 0px;
  position: relative;
`;
export const BlockOne = styled.div`
  display: flex;
  flex-flow: column;
  width: 25%;
  position: relative;
  left: 28px;
  top: 20px;
`;
export const BlockTwo = styled.div``;
export const Image = styled.img`
  width: 50px;
`;
export const Text = styled.div`
  font-size: 14px;
  font-weight: 600;
  font-family: "BPG Nino Mtavruli", sans-serif;
`;
export const Title = styled.div`
  position: absolute;
  left: 52px;
  font-size: 22px;
  font-weight: 600;
  top: 15px;
  font-family: "BPG Nino Mtavruli", sans-serif;
`;
export const LinksBlock = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  justify-content: end;
  width: 400px;
  max-width: 100%;
  flex-flow: wrap;
  gap: 20px;
`;
