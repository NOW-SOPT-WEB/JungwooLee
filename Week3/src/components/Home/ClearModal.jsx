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

  background-color: #000000bf;
`;

const ClearModalWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 9rem;

  width: 50rem;
  height: 30rem;

  color: white;

  background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
`;

const ModalText = styled.h1`
  padding-top: 5rem;

  font-size: 4rem;
`;

const CloseModalButton = styled.button`
  width: 10rem;
  height: 4rem;

  color: white;

  border-radius: 1rem;
  background-color: red;

  transition: 0.3s ease;

  &:hover {
    background-color: #b81414;
  }
`;
