function* quickSortHelper(arr, low, high, entireArray) {
    if (low < high) {
      const pivotIndex = yield* partition(arr, low, high, entireArray);
      yield* quickSortHelper(arr, low, pivotIndex - 1, entireArray);
      yield* quickSortHelper(arr, pivotIndex + 1, high, entireArray);
    }
  }
  
  function* partition(arr, low, high, entireArray) {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        yield [...entireArray];
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    yield [...entireArray];
    return i + 1;
  }
  
  export function* quickSort(arr) {
    yield* quickSortHelper(arr, 0, arr.length - 1, arr);
    return arr;
  }