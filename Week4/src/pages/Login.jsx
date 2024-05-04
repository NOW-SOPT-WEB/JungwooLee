import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputContainer from "../components/Common/InputContainer";
import StyledButton from "../components/Common/StyledButton";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const inputPropertyArr = [
    {
      category: "ID",
      placeholder: "아이디를 입력해주세요",
      inputState: id,
      setInputState: setId,
    },
    {
      category: "PW",
      placeholder: "비밀번호를 입력해주세요",
      inputState: password,
      setInputState: setPassword,
    },
  ];

  const buttonPropertyArr = [
    {
      buttonText: "로그인",
      handleClickFunc: () => {}, // 로그인 api 쏘고 홈으로 이동
    },
    {
      buttonText: "회원가입",
      handleClickFunc: () => {
        navigate("/signup");
      },
    },
  ];

  return (
    <LoginPageWrapper>
      <LoginBox>
        <LoginTitle>Login</LoginTitle>
        <TitleImg src="/assets/img/sprout.png" />
        <InputSection>
          {inputPropertyArr.map((el, idx) => (
            <InputContainer key={`input-${idx}`} {...el} />
          ))}
        </InputSection>
        <ButtonSection>
          {buttonPropertyArr.map((el, idx) => (
            <StyledButton key={`button-${idx}`} {...el} />
          ))}
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

const ButtonSection = styled.section`
  display: flex;
  gap: 5rem;

  margin-top: 5rem;
`;
