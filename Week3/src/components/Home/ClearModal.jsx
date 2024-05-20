import styled from "styled-components";
import ClearModalPortal from "./ClearModalPortal";

function ClearModal({ resetStage, closeModal }) {
  const handleClickCloseButton = () => {
    closeModal();
    resetStage();
  };

  return (
    <ClearModalPortal>
      <BlurryContainer>
        <ClearModalWrapper>
          <ModalText>축하합니다 🎉🎉🎉</ModalText>
          <CloseModalButton onClick={handleClickCloseButton}>
            닫기
          </CloseModalButton>
        </ClearModalWrapper>
      </BlurryContainer>
    </ClearModalPortal>
  );
}

export default ClearModal;

const BlurryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 1;

  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.bgColor};
`;

const ClearModalWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 9rem;

  width: 50rem;
  height: 30rem;

  color: ${({ theme }) => theme.colors.white};

  background-image: ${({ theme }) =>
    `linear-gradient(to top, ${theme.colors.lightBlue} 0%, ${theme.colors.blue} 100%)`};
`;

const ModalText = styled.h1`
  padding-top: 5rem;

  font-size: 4rem;
`;

const CloseModalButton = styled.button`
  width: 10rem;
  height: 4rem;

  color: ${({ theme }) => theme.colors.white};

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.red};

  transition: 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkRed};
  }
`;
