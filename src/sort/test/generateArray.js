function generateArray(length, maxValue = 1000) {
  if (length >= 0) {
    const array = [];
    for (let i = 0; i < length; i++) {
      array.push(Math.floor(Math.random() * maxValue));
    }
    return array;
  }
  return null;
}

export default generateArray;
