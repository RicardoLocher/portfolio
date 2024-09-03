export function* bubbleSort(arr) {
    let len = arr.length;
    let swapped;
    
    do {
        swapped = false;
        
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
                yield [...arr]; // Yield a copy of the array after each swap
            }
        }
        
        len--;
    } while (swapped);
    
    return arr;
}