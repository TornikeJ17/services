import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  ChatContainer,
  TextTypeBlock,
  Button,
  Input,
  MessageSender,
  Message,
  ChatBlock
} from "./ChatStyle";
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    if (messages.length === 1 && messages[0].sender === "user") {
      simulateBotReply();
    }
  }, [messages]);
  const handleInputChange = (e) => {
    setCurrentMessage(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (currentMessage.trim() !== "") {
      setMessages([...messages, { content: currentMessage, sender: "user" }]);
      setCurrentMessage("");
    }
  };

  const simulateBotReply = () => {
    setTimeout(() => {
      setMessages([
        ...messages,
        { content: "გამარჯობა, რით შეგვიძლია დაგეხმაროთ?", sender: "bot" },
      ]);
    }, 500);
  };
  return (
    <Container>
      <Title>ჩათი</Title>
      <ChatContainer>
        <ChatBlock className="message-container">
          {messages.map((message, index) => (
            <MessageSender key={index} className={`message ${message.sender}`}>
              <Message>{message.content}</Message>
            </MessageSender>
          ))}
        </ChatBlock>
        <TextTypeBlock>
          <Input
            type="text"
            placeholder="შეიყვანეთ ტექსტი..."
            value={currentMessage}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <Button onClick={handleSendMessage}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_102_5)">
                <path
                  d="M17.5113 0.196875C17.8664 0.442969 18.0527 0.868359 17.9859 1.29375L15.7359 15.9187C15.6832 16.2598 15.4758 16.5586 15.1734 16.7273C14.8711 16.8961 14.509 16.9172 14.1891 16.7836L9.98438 15.0363L7.57617 17.6414C7.26328 17.9824 6.77109 18.0949 6.33867 17.9262C5.90625 17.7574 5.625 17.3391 5.625 16.875V13.9359C5.625 13.7953 5.67773 13.6617 5.77266 13.5598L11.6648 7.12969C11.8687 6.9082 11.8617 6.56719 11.6508 6.35625C11.4398 6.14531 11.0988 6.13125 10.8773 6.33164L3.72656 12.6844L0.622266 11.1305C0.249609 10.9441 0.0105468 10.5715 -3.94066e-08 10.1566C-0.0105469 9.7418 0.207422 9.35508 0.566016 9.14766L16.316 0.147656C16.6922 -0.0667969 17.1562 -0.0457032 17.5113 0.196875Z"
                  fill="#B1C1CF"
                />
              </g>
              <defs>
                <clipPath id="clip0_102_5">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Button>
        </TextTypeBlock>
      </ChatContainer>
    </Container>
  );
};

export default Chat;
