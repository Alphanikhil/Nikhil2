import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select any Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center alignment for responsiveness */
  padding: 16px; /* Padding to prevent edge touches */
  box-sizing: border-box;

  .flex {
    display: flex;
    gap: 16px;
    flex-wrap: wrap; /* Allow wrapping on smaller screens */
    justify-content: center;
  }

  p {
    font-size: 18px;
    font-weight: 700;
    margin: 8px 0; /* Space between elements */
    text-align: center; /* Center text for better alignment */
  }

  .error {
    color: red;
    font-size: 16px;
  }

  @media (max-width: 600px) {
    /* Responsive adjustments for smaller screens */
    p {
      font-size: 16px;
    }

    .flex {
      gap: 12px; /* Reduce gap for smaller screens */
    }
  }
`;

const Box = styled.div`
  height: 60px;
  width: 60px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 20px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  border-radius: 8px; /* Rounded corners for a modern look */

  @media (max-width: 600px) {
    /* Adjust size for smaller screens */
    height: 48px;
    width: 48px;
    font-size: 16px;
  }
`;
