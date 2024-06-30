import styled from "styled-components";

const FullScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const RulesContainer = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  width: 800px;
  height: 700px;
  padding: 50px 70px;
  position: relative;
  > button {
    margin-top: 30px;
    margin-left: 110px;
  }
`;

const ScrollImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  filter: drop-shadow(10px 20px 4px rgba(0, 0, 0, 0.4));
`;

const RulesHeading = styled.h1`
  font-family: "TradeWinds";
  font-size: 40px;
  color: #5a2801;
  margin: 0;
  padding: 20px;
  margin-left: 110px;
  font-weight: bold;
`;

const RulesText = styled.p`
  font-family: "TradeWinds";
  margin-left: 125px;
  font-size: 20px;
  color: #5a2801;
  padding: 20px;
  text-align: left;
`;

export { FullScreen, RulesContainer, RulesHeading, RulesText, ScrollImage };
