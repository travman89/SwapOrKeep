import ReactCardFlip from "react-card-flip";
import {
  Front,
  Back,
  SwapContainer,
  TopLeft,
  BottomRight,
  SuitContainer,
  SuitRow,
  Suit,
  Ace,
  Jack,
  Queen,
  King,
  FaceContainer,
} from "./components";

const NumberedCards = [
  [1, 0, 0, 1],
  [1, 1, 1],
  [2, 2],
  [2, 1, 2],
  [2, 2, 2],
  [2, 3, 2],
  [3, 2, 3],
  [3, 3, 3],
  [2, 3, 3, 2],
];
const CardFace = ({
  suit,
  value,
  red,
}: {
  suit: string;
  value: number;
  red: boolean;
}) => {
  if (value < 9) {
    return (
      <SuitContainer>
        {NumberedCards[value].map((row, i) => (
          <SuitRow>
            {Array(row)
              .fill("")
              .map((symbol, j) => (
                <Suit red={red}>{suit}</Suit>
              ))}
          </SuitRow>
        ))}
      </SuitContainer>
    );
  }
  if (value === 9) {
    return (
      <FaceContainer>
        <Jack />
      </FaceContainer>
    );
  }
  if (value === 10) {
    return (
      <FaceContainer>
        <Queen />
      </FaceContainer>
    );
  }
  if (value === 11) {
    return (
      <FaceContainer>
        <King />
      </FaceContainer>
    );
  }
  if (value === 12) {
    return (
      <FaceContainer>
        <Ace />
      </FaceContainer>
    );
  }
  return <></>;
};

const Card = ({
  card,
  hide,
  faceDown,
  swapped,
}: {
  card: number;
  hide: boolean;
  faceDown: boolean;
  swapped: boolean;
}) => {
  const value = (card - 1) % 13;
  const suit = Math.floor((card - 1) / 13);
  const cardSuits = [
    { symbol: "♥", red: true },
    { symbol: "♦", red: true },
    { symbol: "♠", red: false },
    { symbol: "♣", red: false },
  ];
  const cardValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "j",
    "Q",
    "K",
    "A",
  ];

  return (
    <>
      {card && (
        <SwapContainer swapped={swapped} hide={hide}>
          <ReactCardFlip isFlipped={!faceDown} flipDirection="horizontal">
            <Back />
            <Front>
              <CardFace
                suit={cardSuits[suit].symbol}
                value={value}
                red={cardSuits[suit].red}
              />
              <TopLeft red={cardSuits[suit].red}>
                {cardValues[value]}
                <br />
                {cardSuits[suit].symbol}
              </TopLeft>
              <BottomRight red={cardSuits[suit].red}>
                {cardSuits[suit].symbol}
                <br />
                {cardValues[value]}
              </BottomRight>
            </Front>
          </ReactCardFlip>
        </SwapContainer>
      )}
    </>
  );
};

export { Card };
