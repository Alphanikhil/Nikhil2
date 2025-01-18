import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Winner = () => {
  const [code, setCode] = useState("");

  // List of random codes
  const codes = ["1B2B7", "2C9VD", "8WDM2", "87BYI2", "KNK2J", "BMS72"];

  // Select a random code when the component loads
  useEffect(() => {
    const randomCode = codes[Math.floor(Math.random() * codes.length)];
    setCode(randomCode);
  }, []);
  

  return (
    <WinnerContainer>
      <Header>🎉 Congratulations, You Win! 🎉</Header>
      <Message>
        Show this screen or a screenshot of your unique code to claim your reward.
        <br />
        <Highlight>free coffee</Highlight> on us!
      </Message>
      <CodeContainer>
        <Code>{code}</Code>
      </CodeContainer>
      <Footer>
        Visit <strong>Dr.cafe</strong> soon to redeem your reward. We're excited to celebrate your win!
        <br />
        <CallToAction>Enjoy your prize and keep playing for more rewards!</CallToAction>
      </Footer>
    </WinnerContainer>
  );
};

export default Winner;

// Styled Components
const WinnerContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  color: #fff;
  height: 100vh;
  padding: 20px;
  padding-top: 70px;
  box-sizing: border-box; /* Ensure padding doesn't affect the layout */

  @media (max-width: 768px) {
    padding: 15px;
    padding-top: 50px;
  }
`;

const Header = styled.h1`
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 2px 2px #ff7f50;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Message = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
  line-height: 1.6;
  color: #fffbfb;
  padding: 0 20px; /* Add padding to prevent text from touching screen edges */

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const Highlight = styled.span`
  color: #ffd700;
  font-weight: bold;
`;

const CodeContainer = styled.div`
  background: #fff;
  padding: 25px 35px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  width: fit-content;
  margin: 0 20px; /* Ensure code container doesn't touch screen edges */
  
  @media (max-width: 768px) {
    padding: 20px 30px;
    margin-bottom: 20px;
  }
`;

const Code = styled.p`
  font-size: 26px;
  font-weight: bold;
  color: #333;
  margin: 0;
  letter-spacing: 3px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Footer = styled.div`
  font-size: 16px;
  margin-top: 20px;
  color: #ffffff;
  font-style: italic;
  text-align: center;
  line-height: 1.6;
  padding: 0 20px; /* Prevent text from touching edges */

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CallToAction = styled.span`
  display: inline-block;
  margin-top: 10px;
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
  text-shadow: 1px 1px #ff4500;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
