import styled from "styled-components";

interface CardContainerProps {
  swapped: boolean;
  hide: boolean;
}

const CardContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border: 1px solid #999999;
  border-radius: 10px;
  min-width: 526px;
  min-height: 366px;
  align-items: center;
`;

const SwapContainer = styled.div<CardContainerProps>`
  transition: all 0.5s;
  &:first-child {
    transform: translateX(${(props) => (props.swapped ? "260px" : "0")})
      translateY(${(props) => (props.hide ? "-100px" : "0")});
  }
  &:last-child {
    transform: translateX(${(props) => (props.swapped ? "-260px" : "0")})
      translateY(${(props) => (props.hide ? "-100px" : "0")});
  }
  opacity: ${(props) => (props.hide ? 0 : 1)};
`;
const BaseCard = styled.div`
  width: 220px;
  height: 320px;
  margin: 5px;
  border-radius: 10px;
`;

const Back = styled(BaseCard)`
  background-size: 90px;
  background-color: #3c3c3c;
  background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.005-7.58 7.58 7.58 7.58-81.005 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 2.448-2.335 4.683-4.05 6.613-1.035-.672-2.2-1.16-3.45-1.413V3c0-1.04-.144-2.046-.414-3H28.5zM0 17h3L.857 7H0v10zM15.197 0c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6S4 6.314 4 3c0-1.093.292-2.117.803-3h10.394zM109 115c-1.657 0-3 1.343-3 3v4H74v-4c0-1.657-1.343-3-3-3-5.523 0-10-4.477-10-10 0-2.793 1.145-5.318 2.99-7.132C60.262 93.638 58 88.084 58 82c0-13.255 10.748-24 23.99-24h16.02C111.26 58 122 68.742 122 82c0 6.082-2.263 11.636-5.992 15.866C117.855 99.68 119 102.206 119 105c0 5.523-4.477 10-10 10zm0-2c-2.76 0-5 2.24-5 5v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.76-2.24-5-5-5-4.418 0-8-3.582-8-8s3.582-8 8-8v-4c0-2.64 1.136-5.013 2.946-6.66L72.6 84.86C70.39 86.874 69 89.775 69 93v2.2c-1.25.254-2.414.74-3.447 1.412C62.098 92.727 60 87.61 60 82c0-12.15 9.84-22 22-22h16c12.15 0 22 9.847 22 22 0 5.61-2.097 10.728-5.55 14.613-1.035-.672-2.2-1.16-3.45-1.413V93c0-3.226-1.39-6.127-3.6-8.14l-1.346 1.48C107.864 87.987 109 90.36 109 93v4c4.418 0 8 3.582 8 8s-3.582 8-8 8zM90.857 97L93 107h-6l2.143-10h1.714zM80 99c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm20 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z' fill='%23d4af37' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
  border: 15px solid #d4af37;
`;

const Front = styled(BaseCard)`
  width: 250px;
  height: 350px;
  max-width: 250px;
  max-height: 350px;
  padding: 60px 40px;
  box-sizing: border-box;
  background-color: #fff;
  position: relative;
  background-color: #cccccc;
  border: 5px solid rgba(0, 0, 0, 0);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23eeeeee' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  min-height: 50px;
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
  transition: all 0.3s;
  &:active {
    transform: scale(0.97);
  }
  font-family: "TradeWinds";
`;

const TableContainer = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
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
`;

const CardNumber = styled.p<{ red: boolean }>`
  font-family: "TradeWinds";
  font-weight: 600;
  position: absolute;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  margin: 0;
  color: ${(props) => (props.red ? "#c10000" : "#111111")};
`;
const TopLeft = styled(CardNumber)`
  top: 0;
  left: 0;
`;

const BottomRight = styled(CardNumber)`
  bottom: 0;
  right: 0;
`;

const ScoreboardSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  position: absolute;
  width: calc(100%);
  height: 27vh;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const PlayerSquare = styled.div`
  background-size: cover;
  height: calc(25vh - 20px);
  width: calc(25vh - 20px);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  position: relative;
`;

const Player1 = styled(PlayerSquare)`
  background-image: url("../public/pirate1.jpeg");
`;
const Player2 = styled(PlayerSquare)`
  background-image: url("../public/pirate2.jpeg");
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
`;

const Score = styled.p`
  user-select: none;
  font-size: 150px;
  width: calc(25vh - 10px);
  text-align: center;
  font-family: "TradeWinds";
  color: #d4af37;
  -webkit-text-stroke: 4px #3c1a00;
`;

const MessageContainer = styled.div`
  margin-top: 10px;
  background-color: #5a2801;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='92' viewBox='0 0 112 92'%3E%3Cg fill='%23721e09' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M72 10H40L16 20H0v8h16l24-14h32l24 14h16v-8H96L72 10zm0-8H40L16 4H0v8h16l24-6h32l24 6h16V4H96L72 2zm0 84H40l-24-6H0v8h16l24 2h32l24-2h16v-8H96l-24 6zm0-8H40L16 64H0v8h16l24 10h32l24-10h16v-8H96L72 78zm0-12H40L16 56H0v4h16l24 14h32l24-14h16v-4H96L72 66zm0-16H40l-24-2H0v4h16l24 6h32l24-6h16v-4H96l-24 2zm0-16H40l-24 6H0v4h16l24-2h32l24 2h16v-4H96l-24-6zm0-16H40L16 32H0v4h16l24-10h32l24 10h16v-4H96L72 18z'/%3E%3C/g%3E%3C/svg%3E");
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: 10px;
  height: fit-content;
  width: 500px;
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
`;

const SuitContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const SuitRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  align-items: center;
`;

const Suit = styled.div<{ red: boolean }>`
  margin: 0 auto;
  font-size: 26px;
  line-height: 30px;
  font-family: "TradeWinds";
  color: ${(props) => (props.red ? "#c10000" : "#111111")};
`;

const FaceContainer = styled(SuitContainer)`
  justify-content: center;
`;
const Ace = styled.div`
  background-size: cover;
  margin: 0;
  width: 200px;
  height: 200px;
  background-image: url("../public/ace_optimized.png");
`;

const Jack = styled.div`
  background-size: cover;
  margin: 0;
  width: 180px;
  height: 180px;
  border-radius: 20px;
  background-image: url("../public/jack_optimized.png");
`;

const Queen = styled.div`
  background-size: cover;
  margin: 0;
  width: 180px;
  height: 180px;
  border-radius: 20px;
  background-image: url("../public/queen_optimized.png");
`;

const King = styled.div`
  background-size: cover;
  margin: 0;
  width: 180px;
  height: 180px;
  border-radius: 20px;
  background-image: url("../public/king_optimized.png");
`;

export {
  CardContainer,
  Front,
  Back,
  ButtonContainer,
  Button,
  SwapContainer,
  TableContainer,
  Table,
  TopLeft,
  BottomRight,
  ScoreboardSection,
  PlayerSquare,
  Player1,
  Player2,
  PlayerName,
  Score,
  PlayerScoreContainer,
  Message,
  MessageContainer,
  SuitContainer,
  SuitRow,
  Suit,
  FaceContainer,
  Ace,
  Jack,
  Queen,
  King,
};
