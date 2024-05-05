import styled from "styled-components";

function InfoContainer({ category, value }) {
  return (
    <InfoContainerWrapper>
      <InfoCategory>{category}</InfoCategory>
      <InfoValue>{value}</InfoValue>
    </InfoContainerWrapper>
  );
}

export default InfoContainer;

const InfoContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const InfoCategory = styled.h2`
  font-size: 2rem;
  font-weight: 500;
`;

const InfoValue = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;
