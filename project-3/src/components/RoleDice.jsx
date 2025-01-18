import styled from "styled-components";

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
      </div>
      <p>Click on the dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; /* Center the content for better readability */

  .dice {
    cursor: pointer;
    width: 120px; /* Ensures the dice image has a fixed size */
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain; /* Ensures the dice image scales properly */
    }
  }

  p {
    font-size: 24px;
    margin-top: 16px; /* Add spacing between the dice and text */
    text-align: center; /* Center the text */
    margin-bottom: 0; /* Remove any bottom margin */
  }

  @media (max-width: 768px) {
    margin-top: 24px;

    .dice {
      width: 80px; /* Reduce the size of the dice for smaller screens */
      height: 80px;
    }

    p {
      font-size: 18px; /* Reduce font size for smaller screens */
      margin-top: 12px;
    }
  }

  @media (max-width: 480px) {
    .dice {
      width: 60px; /* Further reduce dice size for very small screens */
      height: 60px;
    }

    p {
      font-size: 16px; /* Further reduce font size for smaller screens */
    }
  }
`;
