function bubbleSort(a) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (var i=0; i < a.length-1; i++) {
      if (a[i] > a[i+1]) {
        const temp = a[i];
        a[i] = a[i+1];
        a[i+1] = temp;
        swapped = true;
      }
    }
  }
}

export default bubbleSort;
