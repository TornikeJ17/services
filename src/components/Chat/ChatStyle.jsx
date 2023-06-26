import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 376px;
  height: 462px;
  border-radius: 10px 10px 10px 10px;
  right: 0;
  bottom: 100px;
  background: #fff;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
  border-radius: 8px 8px 0px 0px;
  padding: 10px;
  color: #fff;
`;
export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 80%;
`;
export const TextTypeBlock = styled.div`
  display: flex;
  height: 40px;
  position: relative;
  bottom: -25px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e5e5e5;
  padding: 10px;
`;
export const Button = styled.button`
  background: none;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const MessageSender = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 10px;
  gap: 10px;

  width: 345px;
  height: 45px;
`;
export const Message = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 16px;
  gap: 10px;
  background: #ebf0f4;
  border-radius: 0px 8px 8px 8px;
  word-break: break-word;
`;
export const ChatBlock = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100%;
`