function drawItems(inputData, n) {
  const result = inputData.slice(0, n);
  const newData = inputData.slice(n, inputData.length);

  return { newData, result };
}

module.exports = drawItems;
