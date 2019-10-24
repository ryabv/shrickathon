function permutations(n) {
    let numbers = getNumbers(n);
    const counts = getFactorial(n);
    const permutations = [];

    for (let a = 0, i = 0, j = 1; a < counts; a++) {
        if (j === numbers.length - 1) {
            i = 0;
            j = 1;
        } else {
            i++;
            j++;
        }

        numbers = alternate(numbers, i, j);
        permutations.push(numbers.join(''));
    }
    
    return permutations;
}

function alternate(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr;
}

function getFactorial(n) {
    let nums = [];
    let result = 1;
    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }

    for (let i = 0; i < nums.length; i++) {
        result *= nums[i];
    }

    return result;
}

function getNumbers(max) {
    const numbers = [];
    for (let i = 1; i <= max; i++) {
        numbers.push(i);
    }
    return numbers;
}