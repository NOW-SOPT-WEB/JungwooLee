import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { IcAngleDown } from "../../public/assets/svg/icon";
import { getMyInfo } from "../apis/MyPage/getMyInfo";
import { patchPasswordChange } from "../apis/MyPage/patchPasswordChange";
import StyledButton from "../components/Common/StyledButton";
import CheckPasswordInputContainer from "../components/MyPage/CheckPasswordInputContainer";
import InfoContainer from "../components/MyPage/InfoContainer";

function MyPage() {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [myInfo, setMyInfo] = useState({
    authenticationId: "",
    nickname: "",
    phone: "",
  });
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [previousPassword, setPreviousPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordVerification, setNewPasswordVerification] = useState("");

  const infoPropertyArr = useMemo(() => {
    [
      {
        category: "ID",
        value: myInfo.authenticationId,
      },
      {
        category: "닉네임",
        value: myInfo.nickname,
      },
      {
        category: "전화번호",
        value: myInfo.phone,
      },
    ];
  }, [myInfo]);

  const checkPasswordInputPropertyArr = useMemo(() => {
    return [
      {
        category: "기존 비밀번호",
        placeholder: "기존 비밀번호를 입력해주세요",
        inputState: previousPassword,
        setInputState: setPreviousPassword,
      },
      {
        category: "새로운 비밀번호",
        placeholder: "새로운 비밀번호를 입력해주세요",
        inputState: newPassword,
        setInputState: setNewPassword,
      },
      {
        category: "비밀번호 확인",
        placeholder: "비밀번호를 한 번 더 입력해주세요",
        inputState: newPasswordVerification,
        setInputState: setNewPasswordVerification,
      },
    ];
  }, [previousPassword, newPassword, newPasswordVerification]);

  const handleClickToggleButton = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const fetchMyInfo = async () => {
    const myInfo = await getMyInfo(userId);
    myInfo && setMyInfo(myInfo);
  };

  useEffect(() => {
    fetchMyInfo();
  }, []);

  return (
    <MyPageWrapper>
      <MyInfoBox>
        <MyInfoTitle>MyPage</MyInfoTitle>
        <InfoSection>
          {infoPropertyArr.map((el, idx) => (
            <InfoContainer key={`info-${idx}`} {...el} />
          ))}
        </InfoSection>
        <PasswordChangeSectionWrapper>
          <PasswordChangeToggle type="button" onClick={handleClickToggleButton}>
            <StyledIcAngleDown $isToggleOpen={isToggleOpen} />
            <PasswordChangeText>비밀번호 변경</PasswordChangeText>
          </PasswordChangeToggle>
          {isToggleOpen && (
            <PasswordChangeSection>
              <CheckPasswordInputSection>
                {checkPasswordInputPropertyArr.map((el, idx) => (
                  <CheckPasswordInputContainer key={`input-${idx}`} {...el} />
                ))}
              </CheckPasswordInputSection>
              <StyledButton
                type="button"
                buttonText={"비밀번호 변경"}
                handleClickFunc={() =>
                  patchPasswordChange(
                    userId,
                    previousPassword,
                    newPassword,
                    newPasswordVerification,
                    navigate
                  )
                }
              />
            </PasswordChangeSection>
          )}
        </PasswordChangeSectionWrapper>
        <StyledButton
          type="button"
          buttonText={"홈으로"}
          handleClickFunc={() => navigate(`/home/${userId}`)}
        />
      </MyInfoBox>
    </MyPageWrapper>
  );
}

export default MyPage;

const MyPageWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: #ffdab9;
`;

const MyInfoBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50rem;
  height: 77rem;
  padding: 5rem 7rem;

  background-color: white;
`;

const MyInfoTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
`;

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  width: 100%;
  margin-top: 5rem;
`;

const PasswordChangeSectionWrapper = styled.section`
  width: 100%;
  height: 31rem;
  margin: 5rem 0;
`;

const PasswordChangeToggle = styled.button`
  display: flex;
  column-gap: 1rem;
  align-items: center;

  width: 15rem;
  height: 3rem;
`;

const PasswordChangeText = styled.h3`
  font-size: 1.7rem;
  font-weight: 500;
`;

const StyledIcAngleDown = styled(IcAngleDown)`
  width: 2.5rem;
  height: 2.5rem;

  transform: ${({ $isToggleOpen }) => $isToggleOpen && "rotate(180deg)"};
  transition: 0.2s ease;
`;

const PasswordChangeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3rem;

  width: 100%;
  height: 26rem;
  margin-top: 2rem;
`;

const CheckPasswordInputSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  width: 100%;
`;
