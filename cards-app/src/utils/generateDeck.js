function generateDeck() {
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace"
  ];
  const suits = ["Clubs", "Spades", "Hearts", "Diamonds"];
  let index = 0;
  let deck = [];
  suits.forEach(suit => {
    values.forEach(value => {
      const card = {
        index: index++,
        value: value,
        suit: suit
      };
      deck.push(card);
    });
  });
  return deck;
}

module.exports = generateDeck;
