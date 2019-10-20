function insertionSort() {
    let nums = [5,1,2,4,0,6,-1,2];
    let sortedArray = [];
    sortedArray[nums.length - 1] = nums[nums.length - 1];

    for (let i = nums.length - 1; i > 0; i--) {
        let checkedNum = nums[i - 1];

        for (let j = 0; j < sortedArray.length; j++) {
            if (typeof sortedArray[j] === 'undefined') {
                continue;
            }

            if (checkedNum > sortedArray[j]) {
                sortedArray[j - 1] = sortedArray[j];
            }

            if (j === sortedArray.length - 1 && checkedNum >= sortedArray[j]) {
                sortedArray[j] = checkedNum;
                break;
            }

            if (checkedNum <= sortedArray[j]) {
                sortedArray[j - 1] = checkedNum;
                break;
            }

            
        }
    }

    console.log(sortedArray);

}