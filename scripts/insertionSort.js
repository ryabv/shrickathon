function insertionSort(nums) {
    for (let sortedPartIndex = nums.length - 1; sortedPartIndex > 0; sortedPartIndex--) {
        let checkedNum = nums[sortedPartIndex - 1];      
        for (let j = sortedPartIndex; j <= nums.length - 1; j++) {
            if (checkedNum >= nums[j]) {
                nums[j - 1] = nums[j];

                if (j === nums.length - 1) {
                    nums[j] = checkedNum;
                }
            }

            if (checkedNum < nums[j]) {
                nums[j - 1] = checkedNum;
                break;
            }
        }
    }

    console.log(nums);
}