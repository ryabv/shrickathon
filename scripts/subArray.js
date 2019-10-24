function subArray(arr) {
    let max = 0;
    let start = 0, end = 0, diff = 0;

    while (diff !== arr.length) {
        end = start + diff;
        
        let sub = arr.slice(start, end + 1);
        const sum = sumArrayParts(sub);
        max = sum > max ? sum : max;

        start++;
        
        if (end === arr.length - 1) {
            start = 0;
            diff++;
        }
    }

    return max;
}

function sumArrayParts(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    return result;
}