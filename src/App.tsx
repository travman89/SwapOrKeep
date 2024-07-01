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
  NewGameButton,
  RulesButton,
} from "./components";
import { Card } from "./Card";
import "./App.css";
import { Rules } from "./Rules";
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
  const [hideButtons, setHideButtons] = useState(false);
  const [cardFaceDown, setCardFaceDown] = useState(true);
  const [turnStep, setTurnStep] = useState<Steps>(Steps.SWAP);
  const [swapped, setSwapped] = useState(false);
  const [hasSwapped, setHasSwapped] = useState(false);
  const [playerNames, setPlayerNames] = useState(["James", "Daddy"]);
  const [playerScores, setPlayerScore] = useState([0, 0]);
  const [message, setMessage] = useState(`${playerNames[0]}'s Turn`);
  const [showVictoryTile, setShowVictoryTile] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [initialDeal, setInitialDeal] = useState<number[]>([]);

  const resetGame = () => {
    setPlayerTurn(0);
    setPlayerCards([]);
    setInitialDeal([]);
    setDeckPosition(0);
    setMessage(`${playerNames[0]}'s Turn`);
    setPlayerScore([0, 0]);
    setShowVictoryTile(false);
    newGame();
  };

  const calculateWinner = () => {
    if (playerCards[0] && playerCards[1]) {
      const playerOneValue = (playerCards[0] - 1) % 13;
      const playerTwoValue = (playerCards[1] - 1) % 13;
      if (playerOneValue === playerTwoValue) {
        setMessage("Tie!");
      } else {
        if (playerOneValue > playerTwoValue) {
          setMessage(`${playerNames[0]} Wins!`);
          setPlayerScore([playerScores[0] + 1, playerScores[1]]);
        } else {
          setMessage(`${playerNames[1]} Wins!`);
          setPlayerScore([playerScores[0], playerScores[1] + 1]);
        }
      }
      if (deckPosition >= 50) {
        setTimeout(() => {
          setMessage("Game Over");
          setTurnStep(Steps.NEW_GAME);
          setShowVictoryTile(true);
        }, 1000);
      }
    }
  };
  const deal = () => {
    setHideCards(true);
    setTurnStep(Steps.SWAP);
    setHideButtons(true);
    setMessage(`${playerNames[playerTurn]}'s Turn`);
    setTimeout(() => {
      if (playerTurn === 0) {
        setPlayerCards([deck[deckPosition], deck[deckPosition + 1]]);
        setInitialDeal([deck[deckPosition], deck[deckPosition + 1]]);
      } else {
        setPlayerCards([deck[deckPosition + 1], deck[deckPosition]]);
        setInitialDeal([deck[deckPosition + 1], deck[deckPosition]]);
      }
      setPlayerTurn(playerTurn === 0 ? 1 : 0);
      setCardFaceDown(true);
      setSwapped(false);
      setHasSwapped(false);
    }, 400);

    setTimeout(() => {
      setHideCards(false);
      setHideButtons(false);
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
    setShowVictoryTile(false);
    deal();
  }, [deck]);

  const playerOneName = (event: any) => {
    setPlayerNames([event.target.value, playerNames[1]]);
  };

  const playerTwoName = (event: any) => {
    setPlayerNames([playerNames[0], event.target.value]);
  };

  const getVictoryMessage = () => {
    if (playerScores[0] === playerScores[1]) {
      return "We have a tie!";
    } else {
      return playerScores[0] > playerScores[1]
        ? `${playerNames[0]} is the winner!`
        : `${playerNames[1]} is the winner!`;
    }
  };

  const showRulesScreen = () => {
    setShowRules(true);
  };
  const hideRulesScreen = () => {
    setShowRules(false);
  };
  return (
    <>
      {showRules && <Rules hideRules={hideRulesScreen} />}
      <TableContainer>
        <NewGameButton onClick={resetGame}> New Game </NewGameButton>
        <RulesButton onClick={showRulesScreen}>Rules</RulesButton>
        <Table>
          {deck.length > 0 && (
            <>
              <CardContainer>
                <Card
                  card={initialDeal[0]}
                  hide={hideCards}
                  faceDown={cardFaceDown}
                  key={"player1"}
                  swapped={swapped}
                />
                <Card
                  card={initialDeal[1]}
                  hide={hideCards}
                  faceDown={cardFaceDown}
                  key={"player2"}
                  swapped={swapped}
                />
              </CardContainer>
              <ButtonContainer>
                {turnStep === Steps.SWAP && (
                  <>
                    <Button onClick={keep} disabled={hideButtons}>
                      {" "}
                      Keep{" "}
                    </Button>
                    <Button onClick={swap} disabled={hideButtons}>
                      {" "}
                      Swap{" "}
                    </Button>
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
            <PlayerName
              onChange={playerOneName}
              value={playerNames[0]}
              name="player1"
              aria-label="Player 1 name input"
            />
          </Player1>
          <Score>{playerScores[0]}</Score>
        </PlayerScoreContainer>
        <div>
          <MessageContainer>
            <Message>{message}</Message>
          </MessageContainer>
          {showVictoryTile && (
            <MessageContainer>
              <Message>{getVictoryMessage()}</Message>
            </MessageContainer>
          )}
        </div>
        <PlayerScoreContainer>
          <Score>{playerScores[1]}</Score>
          <Player2>
            <PlayerName
              onChange={playerTwoName}
              value={playerNames[1]}
              name="player2"
              aria-label="Player 2 name input"
            />
          </Player2>
        </PlayerScoreContainer>
      </ScoreboardSection>
    </>
  );
}

export default App;
