import styled from "styled-components";
import HomeHeader from "../components/Home/HomeHeader";

import { useEffect, useState } from "react";
import CardGrid from "../components/Home/CardGrid";

const dummyCardList = [
  {
    id: 1,
    imgSrc: "../assets/img/sechon_1.png",
    isClear: false,
  },
  {
    id: 2,
    imgSrc: "../assets/img/sechon_2.png",
    isClear: false,
  },
  {
    id: 3,
    imgSrc: "../assets/img/sechon_3.png",
    isClear: false,
  },
  {
    id: 4,
    imgSrc: "../assets/img/sechon_4.png",
    isClear: false,
  },
  {
    id: 5,
    imgSrc: "../assets/img/sechon_5.png",
    isClear: false,
  },
  {
    id: 6,
    imgSrc: "../assets/img/sechon_6.png",
    isClear: false,
  },
];

function Home() {
  const [cardList, setCardList] = useState([]);
  const [currentPoint, setCurrentPoint] = useState(0);
  const [clearPoint, setClearPoint] = useState(5);
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);

  useEffect(() => {
    const shuffledDummyCards = dummyCardList.sort(() => Math.random() - 0.5);
    const selectedCards = shuffledDummyCards.slice(0, clearPoint);
    const duplicatedCards = [...selectedCards, ...selectedCards];
    const shuffledCards = duplicatedCards.sort(() => Math.random() - 0.5);
    setCardList(shuffledCards);
  }, [clearPoint]);

  const clickCard = (idx, id) => {
    console.log(first[0]);
    first[1] ? setSecond([idx, id]) : setFirst([idx, id]);
  };

  console.log(first, second);

  useEffect(() => {
    currentPoint === clearPoint && {}; // 모달 팝업 로직 구현 필요!!!
  }, [currentPoint, clearPoint]);

  useEffect(() => {
    if (first[1] && second[1]) {
      if (first[1] === second[1]) {
        setCardList(
          cardList.map((card) =>
            card.id === first[1] ? { ...card, isClear: true } : card
          )
        );
        setCurrentPoint(currentPoint + 1);
      }
      setTimeout(() => {
        setFirst([]);
        setSecond([]);
      }, 500);
    }
  }, [first, second]);

  return (
    <HomePageWrapper>
      <HomeHeader currentPoint={currentPoint} clearPoint={clearPoint} />
      <HomeBodyWrapper>
        <CardGrid
          cardList={cardList}
          first={first}
          second={second}
          clearPoint={clearPoint}
          clickCard={clickCard}
        />
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
