import styled from "styled-components";

function Login() {
  return (
    <LoginPageWrapper>
      <LoginBox>
        <LoginTitle>Login</LoginTitle>
        <TitleImg src="/assets/img/sprout.png" />
        <InputSection>
          <InputContainer>
            <InputCategory>ID</InputCategory>
            <InputBox />
          </InputContainer>
          <InputContainer>
            <InputCategory>PW</InputCategory>
            <InputBox />
          </InputContainer>
        </InputSection>
        <ButtonSection>
          <StyledButton>로그인</StyledButton>
          <StyledButton>회원가입</StyledButton>
        </ButtonSection>
      </LoginBox>
    </LoginPageWrapper>
  );
}

export default Login;

const LoginPageWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: #ffdab9;
`;

const LoginBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50rem;
  height: 55rem;
  padding: 5rem 7rem;

  background-color: white;
`;

const LoginTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
`;

const TitleImg = styled.img`
  width: 12rem;
  height: 12rem;
  margin-top: 5rem;

  object-fit: cover;
`;

const InputSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  width: 100%;
  margin-top: 5rem;
`;

const InputContainer = styled.div`
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

const ButtonSection = styled.section`
  display: flex;
  gap: 5rem;

  margin-top: 5rem;
`;

const StyledButton = styled.button`
  width: 10rem;
  height: 5rem;

  font-size: 1.7rem;

  background-color: #96c040;
`;
