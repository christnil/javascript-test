function selectionSort(list) {
  for (let i = 0; i < (list.length - 1); i++) {
    let tmp = list[i];
    let index = i;
    for (let j = i; j < (list.length - 1); j++) {
      if (list[j+1] < tmp) {
        tmp = list[j+1];
        index = j+1;
      }
    }
    list[index] = list[i];
    list[i] = tmp;
  }
}

export default selectionSort;
