function binarySearch(search, arr) {

    while(arr.length >= 1) {
        let mid = getMiddleIndex(arr);

        if (search > arr[mid]) {
            arr = arr.slice(mid);
        } else if (search < arr[mid]) {
            arr = arr.slice(0, mid);
        } else {
            return arr[mid];
        }
    }

    return "Элемент не найден";
}

function getMiddleIndex(arr) {
    return Math.floor(arr.length / 2);
}