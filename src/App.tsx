import { useEffect, useState } from "react";
import { useDeck } from "./useDeck";
import {
  TableContainer,
  CardContainer,
  ButtonContainer,
  Button,
  Table,
  ScoreboardSection,
  Player1,
  Player2,
  PlayerName,
  PlayerScoreContainer,
  Score,
  Message,
  MessageContainer,
} from "./components";
import { Card } from "./Card";
import "./App.css";

enum Steps {
  DEAL = "deal",
  REVEAL = "reveal",
  SWAP = "swap",
  NEW_GAME = "new_game",
}
function App() {
  const { deck, newGame } = useDeck();
  const [deckPosition, setDeckPosition] = useState(0);
  const [playerTurn, setPlayerTurn] = useState(0);
  const [playerCards, setPlayerCards] = useState<number[]>([]);
  const [hideCards, setHideCards] = useState(true);
  const [cardFaceDown, setCardFaceDown] = useState(true);
  const [turnStep, setTurnStep] = useState<Steps>(Steps.SWAP);
  const [swapped, setSwapped] = useState(false);
  const [hasSwapped, setHasSwapped] = useState(false);
  const [playerNames, setPlayerNames] = useState(["James", "Daddy"]);
  const [playerScores, setPlayerScore] = useState([0, 0]);
  const [message, setMessage] = useState(`${playerNames[0]}'s Turn`);

  const resetGame = () => {
    setPlayerTurn(0);
    setPlayerCards([]);
    setDeckPosition(0);
    setMessage(`${playerNames[0]}'s Turn`);
    setPlayerScore([0, 0]);
    newGame();
  };

  const calculateWinner = () => {
    if (playerCards[0] && playerCards[1]) {
      const playerOneValue = (playerCards[0] - 1) % 13;
      const playerTwoValue = (playerCards[1] - 1) % 13;
      if (hasSwapped) {
        if (playerOneValue < playerTwoValue) {
          setMessage(`${playerNames[0]} Wins!`);
          setPlayerScore([playerScores[0] + 1, playerScores[1]]);
        } else if (playerTwoValue < playerOneValue) {
          setMessage(`${playerNames[1]} Wins!`);
          setPlayerScore([playerScores[0], playerScores[1] + 1]);
        }
      } else {
        if (playerOneValue > playerTwoValue) {
          setMessage(`${playerNames[0]} Wins!`);
          setPlayerScore([playerScores[0] + 1, playerScores[1]]);
        } else if (playerTwoValue > playerOneValue) {
          setMessage(`${playerNames[1]} Wins!`);
          setPlayerScore([playerScores[0], playerScores[1] + 1]);
        }
      }
      if (playerOneValue === playerTwoValue) {
        setMessage("Tie!");
      }
      if (deckPosition >= 50) {
        setTimeout(() => {
          setTurnStep(Steps.NEW_GAME);
        }, 500);
      }
    }
  };
  const deal = () => {
    setHideCards(true);
    setTurnStep(Steps.SWAP);
    setMessage(`${playerNames[playerTurn]}'s Turn`);
    setTimeout(() => {
      if (playerTurn === 0) {
        setPlayerCards([deck[deckPosition], deck[deckPosition + 1]]);
      } else {
        setPlayerCards([deck[deckPosition + 1], deck[deckPosition]]);
      }
      setPlayerTurn(playerTurn === 0 ? 1 : 0);
      setCardFaceDown(true);
      setSwapped(false);
      setHasSwapped(false);
    }, 400);

    setTimeout(() => {
      setHideCards(false);
    }, 700);
  };

  const revealCards = () => {
    if (turnStep === Steps.REVEAL) {
      setTurnStep(Steps.DEAL);
      setCardFaceDown(false);
      setDeckPosition(deckPosition + 2);
      setTimeout(() => {
        calculateWinner();
      }, 500);
    }
  };

  const keep = () => {
    setTurnStep(Steps.REVEAL);
  };

  const swap = () => {
    if (!hasSwapped) {
      setHasSwapped(true);
      setSwapped(!swapped);
      setTurnStep(Steps.REVEAL);
      setPlayerCards([playerCards[1], playerCards[0]]);
    }
  };

  useEffect(() => {
    deal();
  }, [deck]);

  const playerOneName = (event: any) => {
    setPlayerNames([event.target.value, playerNames[1]]);
  };

  const playerTwoName = (event: any) => {
    setPlayerNames([playerNames[0], event.target.value]);
  };

  return (
    <>
      <TableContainer>
        <Table>
          {deck.length > 0 && (
            <>
              <CardContainer>
                <Card
                  card={playerCards[0]}
                  hide={hideCards}
                  faceDown={cardFaceDown}
                  key={"player1"}
                  swapped={swapped}
                />
                <Card
                  card={playerCards[1]}
                  hide={hideCards}
                  faceDown={cardFaceDown}
                  key={"player2"}
                  swapped={swapped}
                />
              </CardContainer>
              <ButtonContainer>
                {turnStep === Steps.SWAP && (
                  <>
                    <Button onClick={keep}> Keep </Button>
                    <Button onClick={swap}> Swap </Button>
                  </>
                )}
                {turnStep === Steps.REVEAL && (
                  <Button onClick={revealCards}> Reveal </Button>
                )}
                {turnStep === Steps.DEAL && deckPosition <= 50 && (
                  <Button onClick={deal}> Deal </Button>
                )}
                {turnStep === Steps.NEW_GAME && (
                  <Button onClick={resetGame}> New Game </Button>
                )}
              </ButtonContainer>
            </>
          )}
        </Table>
      </TableContainer>
      <ScoreboardSection>
        <PlayerScoreContainer>
          <Player1>
            <PlayerName onChange={playerOneName} value={playerNames[0]} />
          </Player1>
          <Score>{playerScores[0]}</Score>
        </PlayerScoreContainer>
        <MessageContainer>
          <Message>{message}</Message>
        </MessageContainer>
        <PlayerScoreContainer>
          <Score>{playerScores[1]}</Score>
          <Player2>
            <PlayerName onChange={playerTwoName} value={playerNames[1]} />
          </Player2>
        </PlayerScoreContainer>
      </ScoreboardSection>
    </>
  );
}

export default App;
