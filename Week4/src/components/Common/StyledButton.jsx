import styled from "styled-components";

function StyledButton({ buttonText, handleClickFunc }) {
  return (
    <StyledButtonWrapper type="button" onClick={handleClickFunc}>
      {buttonText}
    </StyledButtonWrapper>
  );
}

export default StyledButton;

const StyledButtonWrapper = styled.button`
  width: 10rem;
  height: 5rem;

  font-size: 1.7rem;

  background-color: #96c040;
`;
