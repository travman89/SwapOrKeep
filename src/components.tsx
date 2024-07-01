import styled from "styled-components";

const CardContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border: 1px solid #999999;
  border-radius: 10px;
  min-width: 526px;
  min-height: 366px;
  align-items: center;

  @media only screen and (max-width: 639px) {
    min-width: 370px;
    min-height: 260px;
    width: calc(370px);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  min-height: 50px;
  @media only screen and (max-width: 639px) {
    margin-top: 20px;
  }
`;

const Button = styled.button`
  all: unset;
  user-select: none;
  width: 130px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
  margin: 0 20px;
  border: 1px solid #f7b476;
  color: #f7b476;
  background-color: #721e09;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='92' viewBox='0 0 112 92'%3E%3Cg fill='%2384240c' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M72 10H40L16 20H0v8h16l24-14h32l24 14h16v-8H96L72 10zm0-8H40L16 4H0v8h16l24-6h32l24 6h16V4H96L72 2zm0 84H40l-24-6H0v8h16l24 2h32l24-2h16v-8H96l-24 6zm0-8H40L16 64H0v8h16l24 10h32l24-10h16v-8H96L72 78zm0-12H40L16 56H0v4h16l24 14h32l24-14h16v-4H96L72 66zm0-16H40l-24-2H0v4h16l24 6h32l24-6h16v-4H96l-24 2zm0-16H40l-24 6H0v4h16l24-2h32l24 2h16v-4H96l-24-6zm0-16H40L16 32H0v4h16l24-10h32l24 10h16v-4H96L72 18z'/%3E%3C/g%3E%3C/svg%3E");
  text-align: center;
  font-size: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  transition: all 0.5s;
  &:active {
    transform: scale(0.97);
  }
  font-family: "TradeWinds";
  opacity: ${(props) => (props.disabled ? 0 : 1)};
`;

const NewGameButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 10px;
  @media only screen and (max-width: 639px) {
    top: 20px;
    right: 10px;
  }
`;

const RulesButton = styled(Button)`
  position: absolute;
  top: 92px;
  right: 10px;
  @media only screen and (max-width: 639px) {
    top: 20px;
    left: 10px;
  }
`;

const TableContainer = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  @media only screen and (max-width: 639px) {
    height: auto;
    box-sizing: border-box;
    display: inline-block;
    margin-top: 100px;
  }
`;

const Table = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  max-width: 95vw;
  max-height: 55vh;
  height: 600px;
  width: 1000px;
  border-radius: 300px;
  border: 35px solid #5a2801;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1f543f;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h16v2h-6v6h6v8H8v-6H2v6H0V0zm4 4h2v2H4V4zm8 8h2v2h-2v-2zm-8 0h2v2H4v-2zm8-8h2v2h-2V4z' fill='%2329654d' fill-opacity='0.34' fill-rule='evenodd'/%3E%3C/svg%3E");

  @media only screen and (max-width: 639px) {
    width: 100%;
    max-width: 100%;
    height: calc(50vh - 100px);
    border-radius: none;
    background-color: transparent;
    background-image: none;
    border: none;
    box-shadow: none;
  }
`;

const ScoreboardSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  position: absolute;
  position: absolute;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  @media only screen and (max-width: 639px) {
    flex-direction: column;
  }
`;

const PlayerScoreContainer = styled.div`
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #5a2801;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='92' viewBox='0 0 112 92'%3E%3Cg fill='%23721e09' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M72 10H40L16 20H0v8h16l24-14h32l24 14h16v-8H96L72 10zm0-8H40L16 4H0v8h16l24-6h32l24 6h16V4H96L72 2zm0 84H40l-24-6H0v8h16l24 2h32l24-2h16v-8H96l-24 6zm0-8H40L16 64H0v8h16l24 10h32l24-10h16v-8H96L72 78zm0-12H40L16 56H0v4h16l24 14h32l24-14h16v-4H96L72 66zm0-16H40l-24-2H0v4h16l24 6h32l24-6h16v-4H96l-24 2zm0-16H40l-24 6H0v4h16l24-2h32l24 2h16v-4H96l-24-6zm0-16H40L16 32H0v4h16l24-10h32l24 10h16v-4H96L72 18z'/%3E%3C/g%3E%3C/svg%3E");
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  padding: 10px;

  @media only screen and (max-width: 639px) {
    width: calc(100% - 40px);
    margin: 5px auto;
    justify-content: space-between;
    > p {
      order: 2;
    }
    > div {
      order: 1;
    }
    &:first-child {
      order: 2;
    }
    &:last-child {
      order: 3;
    }
  }
`;

const PlayerSquare = styled.div`
  background-size: cover;
  height: 180px;
  width: 180px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  position: relative;
  @media only screen and (max-width: 639px) {
    width: 120px;
    height: 80px;
  }
`;

const Player1 = styled(PlayerSquare)`
  background-image: url("../pirate1.webp");
`;
const Player2 = styled(PlayerSquare)`
  background-image: url("../pirate2.webp");
`;

const PlayerName = styled.input`
  position: absolute;
  font-size: 30px;
  padding: 5px;
  width: calc(100% - 10px);
  text-align: center;
  background-color: rgba(30, 30, 30, 0.8);
  border: none;
  color: #d4af37;
  font-family: "TradeWinds";
  &:focus {
    outline: none;
  }
  bottom: 0%;
  left: 0;
  @media only screen and (max-width: 639px) {
    font-size: 18px;
    padding: 2px;
    width: calc(100% - 4px);
  }
`;

const Score = styled.p`
  all: unset;
  user-select: none;
  font-size: 150px;
  margin: 0;
  width: 220px;
  height: 180px;
  max-height: 180px;
  max-width: 220px;
  text-align: center;
  font-family: "TradeWinds";
  color: #d4af37;
  -webkit-text-stroke: 4px #3c1a00;
  @media only screen and (max-width: 639px) {
    font-size: 80px;
    line-height: 95px;
    margin: 0;
    width: 150px;
    height: 80px;
    max-height: 80px;
    max-width: 150px;
  }
`;

const MessageContainer = styled.div`
  margin-top: 10px;
  background-color: #5a2801;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='92' viewBox='0 0 112 92'%3E%3Cg fill='%23721e09' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M72 10H40L16 20H0v8h16l24-14h32l24 14h16v-8H96L72 10zm0-8H40L16 4H0v8h16l24-6h32l24 6h16V4H96L72 2zm0 84H40l-24-6H0v8h16l24 2h32l24-2h16v-8H96l-24 6zm0-8H40L16 64H0v8h16l24 10h32l24-10h16v-8H96L72 78zm0-12H40L16 56H0v4h16l24 14h32l24-14h16v-4H96L72 66zm0-16H40l-24-2H0v4h16l24 6h32l24-6h16v-4H96l-24 2zm0-16H40l-24 6H0v4h16l24-2h32l24 2h16v-4H96l-24-6zm0-16H40L16 32H0v4h16l24-10h32l24 10h16v-4H96L72 18z'/%3E%3C/g%3E%3C/svg%3E");
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: 10px;
  height: fit-content;
  min-width: 400px;
  max-width: 500px;
  @media only screen and (max-width: 639px) {
    width: calc(100% - 40px);
    max-width: calc(100% - 40px);
    min-width: calc(100% - 40px);
    margin: 5px auto;
    order: 1;
  }
`;

const Message = styled.p`
  border-radius: 10px;
  margin: 0;
  padding: 15px;
  font-size: 30px;
  line-height: 30px;
  font-family: "TradeWinds";
  color: #f7b476;
  text-align: center;
  background-color: #000;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h16v2h-6v6h6v8H8v-6H2v6H0V0zm4 4h2v2H4V4zm8 8h2v2h-2v-2zm-8 0h2v2H4v-2zm8-8h2v2h-2V4z' fill='%2329654d' fill-opacity='0.34' fill-rule='evenodd'/%3E%3C/svg%3E");
  @media only screen and (max-width: 639px) {
    padding: 5px;
    font-size: 20px;
  }
`;

export {
  CardContainer,
  ButtonContainer,
  Button,
  TableContainer,
  Table,
  ScoreboardSection,
  PlayerSquare,
  Player1,
  Player2,
  PlayerName,
  Score,
  PlayerScoreContainer,
  Message,
  MessageContainer,
  NewGameButton,
  RulesButton,
};
