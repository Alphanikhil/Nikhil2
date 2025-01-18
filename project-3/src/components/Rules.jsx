import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
 
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
 
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    margin-top: 20px;

    h2 {
      font-size: 20px;
    }
    .text {
      font-size: 14px;
    }
  }
`;
