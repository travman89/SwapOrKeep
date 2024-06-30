import ReactCardFlip from "react-card-flip";
import {
  Front,
  Back,
  SwapContainer,
  TopLeft,
  BottomRight,
  CardFace,
} from "./components";

import { cardSuits, cardValues } from "./constants";
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
