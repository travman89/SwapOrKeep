import { useEffect, useState } from "react";

const shuffleDeck = (deck: number[]) => {
  const shuffledDeck = [...deck];
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = shuffledDeck[i];
    shuffledDeck[i] = shuffledDeck[j];
    shuffledDeck[j] = temp;
  }
  return shuffledDeck;
};

const baseDeck = Array.from({ length: 52 }, (_, i) => i + 1);

const useDeck = () => {
  const [deck, setDeck] = useState<number[]>([]);

  const newGame = () => {
    setDeck([...shuffleDeck([...baseDeck])]);
  };

  useEffect(() => {
    newGame();
  }, []);

  return { deck, newGame };
};

export { useDeck };
