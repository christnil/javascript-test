function insertionSort(list) {
  for (let i = 0; i < list.length; i++) {
    let done = false;
    while(!done) {
      if (i == 0) {
        done = true;
      } else {
        if (list[i] < list[i-1]) {
          const tmp = list[i];
          list[i] = list[i-1];
          list[i-1] = tmp;
          i--;
        } else {
          done = true;
        }
      }
    } 
  } 
}

export default insertionSort;
