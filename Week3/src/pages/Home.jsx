import styled from "styled-components";
import HomeHeader from "../components/Home/HomeHeader";

import React, { useEffect, useState } from "react";
import CardGrid from "../components/Home/CardGrid";
import ClearModal from "../components/Home/ClearModal";
import { cardDeck } from "../constants/cardDeck";

function Home() {
  const [cardList, setCardList] = useState([]);
  const [currentPoint, setCurrentPoint] = useState(0);
  const [clearPoint, setClearPoint] = useState(5);
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
    const shuffledCardDeck = cardDeck.sort(() => Math.random() - 0.5);
    const selectedCards = shuffledCardDeck.slice(0, clearPoint);
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
        <HomeHeader
          currentPoint={currentPoint}
          clearPoint={clearPoint}
          resetStage={resetStage}
        />
        <HomeBodyWrapper>
          <LevelButtonContainer>
            <LevelButton
              type="button"
              $clearPoint={clearPoint}
              onClick={handleClickEasyButton}
            >
              Easy
            </LevelButton>
            <LevelButton
              type="button"
              $clearPoint={clearPoint}
              onClick={handleClickNormalButton}
            >
              Normal
            </LevelButton>
            <LevelButton
              type="button"
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

  color: ${({ theme }) => theme.colors.white};

  border-radius: 1rem;

  &:first-child {
    background-color: ${({ $clearPoint, theme }) =>
      $clearPoint === 5 ? theme.colors.skyBlue : theme.colors.pink};
  }
  &:nth-child(2) {
    background-color: ${({ $clearPoint, theme }) =>
      $clearPoint === 7 ? theme.colors.skyBlue : theme.colors.pink};
  }
  &:last-child {
    background-color: ${({ $clearPoint, theme }) =>
      $clearPoint === 9 ? theme.colors.skyBlue : theme.colors.pink};
  }
`;
