import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import StyledButton from "../components/Common/StyledButton";
import HomeHeader from "../components/Home/HomeHeader";

function Home() {
  const { userId } = useParams();
  const navigate = useNavigate();

  const buttonPropertyArr = [
    {
      buttonText: "내 정보",
      handleClickFunc: () => {
        navigate(`/mypage/${userId}`);
      },
    },
    {
      buttonText: "회원가입",
      handleClickFunc: () => {
        navigate("/signup");
      },
    },
  ];

  return (
    <HomePageWrapper>
      <HomeHeader />
      <HomeImg src="/assets/img/img_turkey1.png" />
      <ButtonSection>
        {buttonPropertyArr.map((el, idx) => (
          <StyledButton key={`button-${idx}`} {...el} />
        ))}
      </ButtonSection>
    </HomePageWrapper>
  );
}

export default Home;

const HomePageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: #ffdab9;
`;

const HomeImg = styled.img`
  width: 65rem;
  height: 40rem;
  margin-top: 6rem;

  object-fit: cover;
`;

const ButtonSection = styled.section`
  display: flex;
  gap: 7rem;

  margin-top: 10rem;
`;
