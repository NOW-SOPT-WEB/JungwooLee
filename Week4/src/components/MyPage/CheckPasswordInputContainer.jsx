import styled from "styled-components";

function CheckPasswordInputContainer({
  category,
  placeholder,
  inputState,
  setInputState,
}) {
  const handleChangeInputValue = (e) => {
    setInputState(e.target.value);
  };

  return (
    <CheckPasswordInputContainerWrapper>
      <CheckPasswordInputCategory>{category}</CheckPasswordInputCategory>
      <CheckPasswordInputBox
        placeholder={placeholder}
        onChange={handleChangeInputValue}
        value={inputState}
      />
    </CheckPasswordInputContainerWrapper>
  );
}

export default CheckPasswordInputContainer;

const CheckPasswordInputContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const CheckPasswordInputCategory = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;

const CheckPasswordInputBox = styled.input`
  width: 70%;
  height: 4rem;

  padding-left: 1rem;
`;
