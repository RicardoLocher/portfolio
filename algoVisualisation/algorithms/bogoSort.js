export function* bogosort(arr) {
    while (!isSorted(arr)) {
        arr = shuffle(arr);
        yield [...arr]; // Yield a copy of the array after each shuffle
    }

    return arr;
}

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }

    return true;
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}