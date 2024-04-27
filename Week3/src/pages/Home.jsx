import styled from "styled-components";
import HomeHeader from "../components/Home/HomeHeader";

import { useEffect, useState } from "react";
import Card from "../components/Home/Card";

const dummyCardList = [
  {
    id: 0,
    imgSrc: "https://picsum.photos/200/300",
  },
  {
    id: 1,
    imgSrc: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    imgSrc: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    imgSrc: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    imgSrc: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    imgSrc: "https://picsum.photos/200/300",
  },
  {
    id: 6,
    imgSrc: "https://picsum.photos/200/300",
  },
  {
    id: 7,
    imgSrc: "https://picsum.photos/200/300",
  },
  {
    id: 8,
    imgSrc: "https://picsum.photos/200/300",
  },
];

function Home() {
  const [cardList, setCardList] = useState([]);
  const [currentPoint, setCurrentPoint] = useState(0);
  const [clearPoint, setClearPoint] = useState(5);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);

  useEffect(() => {
    const shuffledDummyCards = dummyCardList.sort(() => Math.random() - 0.5); // 먼저 전체 셔플
    const selectedCards = shuffledDummyCards.slice(0, clearPoint); // clearPoint 만큼 선택
    const duplicatedCards = [...selectedCards, ...selectedCards]; // 두 배로 복제
    const shuffledCards = duplicatedCards.sort(() => Math.random() - 0.5); // 무작위로 다시 섞기
    setCardList(shuffledCards);
  }, [clearPoint]);

  console.log(cardList);

  return (
    <HomePageWrapper>
      <HomeHeader currentPoint={currentPoint} clearPoint={clearPoint} />
      <HomeBodyWrapper>
        <CardGrid $clearPoint={clearPoint}>
          {cardList.map((card, idx) => (
            <Card
              key={idx}
              {...card}
              // isFront={first.id === card.id || second.id === card.id}
            />
          ))}
        </CardGrid>
      </HomeBodyWrapper>
    </HomePageWrapper>
  );
}

export default Home;

const HomePageWrapper = styled.div`
  height: 100vh;
`;

const HomeBodyWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100% - 20rem);
  padding: 0 20rem;
`;

const CardGrid = styled.article`
  width: 100%;
  height: 50rem;

  display: grid;
  gap: 2rem 1rem;
  /* grid-template-columns: ${({ clearPoint }) =>
    `repeat(${clearPoint}, 1fr)`}; */
  grid-template-columns: repeat(5, 1fr);
`;
