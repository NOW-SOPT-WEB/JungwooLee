import styled from "styled-components";
import HomeHeader from "../components/Home/HomeHeader";

import React, { useEffect, useState } from "react";
import CardGrid from "../components/Home/CardGrid";
import ClearModal from "../components/Home/ClearModal";

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
  {
    id: 7,
    imgSrc: "../assets/img/sechon_6.png",
    isClear: false,
  },
  {
    id: 8,
    imgSrc: "../assets/img/sechon_6.png",
    isClear: false,
  },
  {
    id: 9,
    imgSrc: "../assets/img/sechon_6.png",
    isClear: false,
  },
];

function Home() {
  const [cardList, setCardList] = useState([]);
  const [currentPoint, setCurrentPoint] = useState(0);
  const [clearPoint, setClearPoint] = useState(9);
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [modalOn, setModalOn] = useState(false);

  const handleClickEasyButton = () => {
    setClearPoint(5);
    resetStage();
  };

  const handleClickNormalButton = () => {
    setClearPoint(7);
    resetStage();
  };

  const handleClickHardButton = () => {
    setClearPoint(9);
    resetStage();
  };

  const shuffleCards = () => {
    const shuffledDummyCards = dummyCardList.sort(() => Math.random() - 0.5);
    const selectedCards = shuffledDummyCards.slice(0, clearPoint);
    const duplicatedCards = [...selectedCards, ...selectedCards];
    const shuffledCards = duplicatedCards.sort(() => Math.random() - 0.5);
    setCardList(shuffledCards);
  };

  const clickCard = (idx, id) => {
    if (!isDisabled) {
      first[1] ? setSecond([idx, id]) : setFirst([idx, id]);
    }
  };

  const resetStage = () => {
    setCardList(cardList.map((card) => ({ ...card, isClear: false })));
    setCurrentPoint(0);
    shuffleCards();
  };

  useEffect(() => {
    shuffleCards();
  }, [clearPoint]);

  useEffect(() => {
    currentPoint === clearPoint && setModalOn(true);
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

      setIsDisabled(true);

      setTimeout(() => {
        setFirst([]);
        setSecond([]);
      }, 500);

      setTimeout(() => {
        setIsDisabled(false);
      }, 600);
    }
  }, [first, second]);

  return (
    <React.Fragment>
      {modalOn && (
        <ClearModal
          closeModal={() => setModalOn(false)}
          resetStage={resetStage}
        />
      )}
      <div>
        <HomeHeader currentPoint={currentPoint} clearPoint={clearPoint} />
        <HomeBodyWrapper>
          <LevelButtonContainer>
            <LevelButton
              $clearPoint={clearPoint}
              onClick={handleClickEasyButton}
            >
              Easy
            </LevelButton>
            <LevelButton
              $clearPoint={clearPoint}
              onClick={handleClickNormalButton}
            >
              Normal
            </LevelButton>
            <LevelButton
              $clearPoint={clearPoint}
              onClick={handleClickHardButton}
            >
              Hard
            </LevelButton>
          </LevelButtonContainer>
          <CardGrid
            cardList={cardList}
            first={first}
            second={second}
            clearPoint={clearPoint}
            clickCard={clickCard}
          />
        </HomeBodyWrapper>
      </div>
    </React.Fragment>
  );
}

export default Home;

const HomeBodyWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5rem;

  padding: 5rem 20rem 10rem 20rem;
`;

const LevelButtonContainer = styled.article`
  display: flex;
  column-gap: 5rem;
`;

const LevelButton = styled.button`
  width: 10rem;
  height: 5rem;

  color: white;

  border-radius: 1rem;

  &:first-child {
    background-color: ${({ $clearPoint }) =>
      $clearPoint === 5 ? "#87ceeb" : "#db7093"};
  }
  &:nth-child(2) {
    background-color: ${({ $clearPoint }) =>
      $clearPoint === 7 ? "#87ceeb" : "#db7093"};
  }
  &:last-child {
    background-color: ${({ $clearPoint }) =>
      $clearPoint === 9 ? "#87ceeb" : "#db7093"};
  }
`;
