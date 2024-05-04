import styled from "styled-components";

function InputContainer({ category, placeholder, inputState, setInputState }) {
  const handleChangeInputValue = (e) => {
    setInputState(e.target.value);
  };

  return (
    <InputContainerWrapper>
      <InputCategory>{category}</InputCategory>
      <InputBox
        placeholder={placeholder}
        onChange={handleChangeInputValue}
        value={inputState}
      />
    </InputContainerWrapper>
  );
}

export default InputContainer;

const InputContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const InputCategory = styled.h2`
  font-size: 2rem;
  font-weight: 500;
`;

const InputBox = styled.input`
  width: 80%;
  height: 4rem;

  padding-left: 1rem;
`;
