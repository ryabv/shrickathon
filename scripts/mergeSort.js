function mergeSort(array) {
    const arr = separateArray(array);

    while(arr.length > 1) {

        let fEl = arr.shift();
        let sEl = arr.shift();

        let sub = [];
        let len = fEl.length + sEl.length;
        for (let k = 0; k < len; k++) {
            if (!fEl.length) {
                sub.push(...sEl);
                break;
            }

            if (!sEl.length) {
                sub.push(...fEl);
                break;
            }

            if (fEl[0] > sEl[0]) {
                sub.push(sEl.shift());
            } else {
                sub.push(fEl.shift());
            }
        }
        arr.push(sub);
    }

    return arr;
}

function separateArray(arr) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push([arr[i]]);
    }

    return newArr;
}