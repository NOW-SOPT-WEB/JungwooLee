import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputContainer from "../components/Common/InputContainer";
import StyledButton from "../components/Common/StyledButton";

function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const firstPropertyArr = [
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

  const secondPropertyArr = [
    {
      category: "닉네임",
      placeholder: "닉네임을 입력해주세요",
      inputState: nickname,
      setInputState: setNickname,
    },
    {
      category: "전화번호",
      placeholder: "전화번호를 입력해주세요",
      inputState: phone,
      setInputState: setPhone,
    },
  ];

  const buttonPropertyArr = [
    {
      buttonText: "회원가입",
      handleClickFunc: () => {}, // 회원가입 api 쏘고 로그인으로 이동
    },
    {
      buttonText: "뒤로가기",
      handleClickFunc: () => {
        navigate(-1);
      },
    },
  ];

  return (
    <SignUpPageWrapper>
      <SignUpBox>
        <SignUpTitle>회원가입</SignUpTitle>

        <InputSection>
          {firstPropertyArr.map((el, idx) => (
            <InputContainer key={`input1-${idx}`} {...el} />
          ))}
        </InputSection>
        <Notice>
          비밀번호 형식은 8자 이상, 숫자, 특수문자, 영어, 알파벳이 포함되어야
          합니다.
        </Notice>
        <InputSection>
          {secondPropertyArr.map((el, idx) => (
            <InputContainer key={`input2-${idx}`} {...el} />
          ))}
        </InputSection>
        <Notice>전화번호 형식은 010-****-**** 입니다.</Notice>
        <ButtonSection>
          {buttonPropertyArr.map((el, idx) => (
            <StyledButton key={`button-${idx}`} {...el} />
          ))}
        </ButtonSection>
      </SignUpBox>
    </SignUpPageWrapper>
  );
}

export default SignUp;

const SignUpPageWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: #ffdab9;
`;

const SignUpBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50rem;
  height: 60rem;
  padding: 5rem 3rem;

  background-color: white;
`;

const SignUpTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;

  margin-bottom: 5rem;
`;

const InputSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  width: 100%;
`;

const Notice = styled.p`
  width: 100%;
  padding: 1rem 0 0 20%;
  margin-bottom: 2rem;

  color: blue;
`;

const ButtonSection = styled.section`
  display: flex;
  gap: 5rem;

  margin-top: 5rem;
`;
