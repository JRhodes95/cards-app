const generateDeck = require("../utils/generateDeck");

describe("generateDeck", () => {
  it("should contain 4 suits of cards", () => {
    const result = generateDeck();
    let suitsFound = [];
    result.forEach(card => {
      if (!suitsFound.includes(card.suit)) suitsFound.push(card.suit);
    });
    expect(suitsFound.length).toBe(4);
  });

  it("should contain 52 unique cards", () => {
    const result = generateDeck();
    let cardsFound = [];
    result.forEach(card => {
      if (!cardsFound.includes(card)) cardsFound.push(card);
    });
    expect(cardsFound.length).toBe(52);
  });
});
