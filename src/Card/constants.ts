// This is used to build out numbered card faces. The arrays dictate the # of symbols and where to display them on a card face.
const CardSuitLayout = [
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

const cardSuits = [
  { symbol: "♥", red: 1 },
  { symbol: "♦", red: 1 },
  { symbol: "♠", red: 0 },
  { symbol: "♣", red: 0 },
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

export { CardSuitLayout, cardSuits, cardValues };
