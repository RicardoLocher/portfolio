function* mergeSortHelper(arr, start, end, entireArray) {
    if (start >= end) return;
    const mid = start + Math.floor((end - start) / 2);
    yield* mergeSortHelper(arr, start, mid, entireArray);
    yield* mergeSortHelper(arr, mid + 1, end, entireArray);
    yield* merge(arr, start, mid, end, entireArray);
}

function* merge(arr, start, mid, end, entireArray) {
    let start2 = mid + 1;
    if (arr[mid] <= arr[start2]) {
        return;
    }
    while (start <= mid && start2 <= end) {
        if (arr[start] <= arr[start2]) {
            start++;
        } else {
            const value = arr[start2];
            let index = start2;
            while (index !== start) {
                arr[index] = arr[index - 1];
                index--;
            }
            arr[start] = value;
            start++;
            mid++;
            start2++;
        }
        yield [...entireArray];
    }
}

export function* mergeSort(arr) {
    yield* mergeSortHelper(arr, 0, arr.length - 1, arr);
    return arr;
}