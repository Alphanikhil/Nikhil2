import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  margin: 0 auto; /* Center the container */
  padding: 16px; /* Add padding to prevent edge touches */
  box-sizing: border-box;

  h1 {
    font-size: 80px;
    line-height: 80px;
    margin: 0; /* Remove default margin */
  }

  p {
    font-size: 18px;
    font-weight: 500;
    margin: 8px 0; /* Add spacing between elements */
  }

  @media (max-width: 600px) {
    /* Responsive adjustments for smaller screens */
    max-width: 100%; /* Allow the container to scale */
    h1 {
      font-size: 60px; /* Reduce font size for score */
      line-height: 60px;
    }
    p {
      font-size: 16px; /* Reduce font size for label */
    }
  }
`;
