function drawItems(inputData, n) {
  if (n > inputData.length) {
    throw new Error("Error, cannot draw more items than exist in array.");
  }
  const result = inputData.slice(0, n);
  const newData = inputData.slice(n, inputData.length);

  return { newData, result };
}

module.exports = drawItems;
