import { useState } from "react";
import { Button } from "../components";
import {
  FullScreen,
  RulesContainer,
  RulesHeading,
  RulesText,
  ScrollImage,
} from "./components";
const Rules = ({ hideRules }: { hideRules: () => void }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const loaded = () => {
    setImageLoaded(true);
  };
  return (
    <FullScreen onClick={hideRules}>
      <RulesContainer>
        <ScrollImage loading="lazy" src={"./scroll.webp"} onLoad={loaded} />
        {imageLoaded && (
          <>
            <RulesHeading>♠ Swap or Keep rules ♠</RulesHeading>
            <RulesText>
              Each player is dealt a card. The player whose turn it is can
              choose to keep their card or to swap it with the other player's
              card.
              <br />
              <br />
              When the cards are revealed, the player with the highest card wins
              the round and receives a point. In case of a tie, no points are
              awarded.
              <br />
              <br />
              When the deck runs out, the player with the most points wins the
              game.
              <br />
              <br />
              You can change the names of the players by clicking on them.
              <br />
              <br />
              The game is pirate themed because pirates are cool.
            </RulesText>
            <Button onClick={hideRules}>Close</Button>
          </>
        )}
      </RulesContainer>
    </FullScreen>
  );
};

export { Rules };
