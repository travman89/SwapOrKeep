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
  let value = (card - 1) % 13;
  let suit = Math.floor((card - 1) / 13);

  return (
    <>
      {card && (
        <SwapContainer swapped={swapped ? 1 : 0} hide={hide ? 1 : 0}>
          <ReactCardFlip isFlipped={!faceDown} flipDirection="horizontal">
            <Back />
            <Front>
              <CardFace
                suit={cardSuits[suit].symbol}
                value={value}
                red={cardSuits[suit].red}
              />
              <TopLeft red={cardSuits[suit].red ? 1 : 0}>
                {cardValues[value]}
                <br />
                {cardSuits[suit].symbol}
              </TopLeft>
              <BottomRight red={cardSuits[suit].red ? 1 : 0}>
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
