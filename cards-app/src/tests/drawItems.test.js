const drawItems = require("../utils/drawItems");

const testData = [1, 2, 3, 4, 5, 6];
const refData = [1, 2, 3, 4, 5, 6];

describe("drawItems", () => {
  it("should return an object with two entries", () => {
    let n = 2;
    const { newData, result } = drawItems(testData, n);
    expect(newData).not.toBeNull();
    expect(result).not.toBeNull();
  });

  it("should return a result of length n specified by caller", () => {
    let n = 2;
    const { newData, result } = drawItems(testData, n);
    expect(result.length).toEqual(n);
  });

  it("should return a set of newData with a length n smaller than input", () => {
    let n = 2;
    const { newData } = drawItems(testData, n);
    expect(refData.length - newData.length).toEqual(n);
  });
});
