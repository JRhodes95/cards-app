const shuffleArray = require("../utils/shuffleArray");

const testData = [1, 2, 3];
const refData = [1, 2, 3];

describe("shuffleArray", () => {
  it("should output the same cards that are input", () => {
    const result = shuffleArray(testData).sort();
    expect(result).toEqual(refData);
  });

  it("should reliably shuffle the cards", () => {
    // tests for a maximum of four shuffles
    // thus, a failed test represents a 99.9% certainty of the function being broken
    let shuffleCount = 0;
    let result;
    while (shuffleCount < 4) {
      result = shuffleArray(testData);
      shuffleCount++;
      if (result !== refData) {
        break;
      } else {
        continue;
      }
    }
    expect(result).not.toEqual(refData);
  });
});
