import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="Dices" />
      </div>
      <div className="content">
        <Header>
          <h3>Play & Win Free Coffee</h3>
          <h1>
            Dr.<span>cafe</span>
          </h1>
        </Header>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div img {
    max-width: 100%;
    height: auto;
  }

  .content {
    text-align: center;
    padding: 0 20px; /* Add padding for smaller screens */
  }

  @media (max-width: 768px) {
    height: auto; /* Adjust height for mobile devices */
    padding: 20px;

    .content {
      padding: 0 10px; /* Reduce padding on smaller screens */
    }
  }
`;

const Header = styled.div`
  h3 {
    font-size: 24px;
    margin: 0 0 8px 0;

    @media (max-width: 768px) {
      font-size: 18px; /* Smaller text for mobile */
    }
  }

  h1 {
    font-size: 96px;
    margin: 0;
    display: inline;

    @media (max-width: 768px) {
      font-size: 48px; /* Reduce font size on smaller screens */
    }

    span {
      font-size: 72px;
      display: inline-block;
      margin-left: 8px;

      @media (max-width: 768px) {
        font-size: 36px; /* Adjust "cafe" font size on mobile */
      }
    }
  }
`;