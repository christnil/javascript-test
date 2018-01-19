import bubbleSort from './bubbleSort';

const getArray = () => {
  return [12, 123, 6, 34, 61, 90, 3, 67, 27, 83, 45, 241, 4935, 3, 67, 98];
}

const bubbleArray = getArray();
bubbleSort(bubbleArray);
console.log('bubble sort');
console.log(bubbleArray);
