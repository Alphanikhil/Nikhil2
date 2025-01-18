import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";
import RulesModal from "./Rulesmodal";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (score > 0) { // Navigate to Winner page if score is greater than 20
      navigate("/winner");
    }
  }, [score, navigate]);

  const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const roleDice = () => {
    if (!selectedNumber) {
      setError(" Select any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => setScore(0);

  return (
    <MainContainer>
      {showRules && <RulesModal onClose={() => setShowRules(false)} />}
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide Rules" : "Show Rules"}
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding: 20px;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
  }

  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 20px;

    @media (max-width: 768px) {
      gap: 12px;
    }
  }
`;
