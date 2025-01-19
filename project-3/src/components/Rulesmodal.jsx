import React from "react";
import styled from "styled-components";

const RulesModal = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Heading>Game Rules</Heading>
        <RuleList>
          <li>Select a number between <strong>1 and 6</strong>.</li>
          <li>Roll the dice by clicking the <strong>DICE.</strong>  </li>
          <li>
            If the dice result matches your selected number:
            <ul>
              <li>You earn points equal to the rolled dice number.</li>
            </ul>
          </li>
          <li>
            If the dice result does not match your selected number:
            <ul>
              <li>You lose <strong>2 points</strong>.</li>
            </ul>
          </li>
          <li>
            Aim to score <strong> 15 points</strong> to win a
            <Highlight> free coffee</Highlight>!
          </li>
        </RuleList>
        <Footer>Good luck and enjoy the game!</Footer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default RulesModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px; /* Adds space around the modal so it doesn't touch edges */
`;

const ModalContent = styled.div`
  background: white;
  padding: 25px;
  border-radius: 10px;
  text-align: left;
  position: relative;
  max-width: 500px; /* Increases the max-width for larger screens */
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Heading = styled.h2`
  font-size: 24px;
  text-align: center;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const RuleList = styled.ol`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  padding-left: 20px;

  strong {
    color: #000;
  }

  ul {
    margin-top: 8px;
    margin-bottom: 8px;
    padding-left: 20px;
    list-style-type: disc;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Highlight = styled.span`
  color: #d35400;
  font-weight: bold;
`;

const Footer = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  color: #666;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
