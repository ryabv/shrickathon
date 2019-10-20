function getMaxSort(nums) {

    for (let i = nums.length - 1; i >= 0; i--) {
        let maxIndex = 0;
        let end = i;

        for (let j = end; j >= 0; j--) {
            if (nums[j] > nums[maxIndex]) {
                maxIndex = j;
            }
        }

        let tmp = nums[end];
        nums[end] = nums[maxIndex];
        nums[maxIndex] = tmp;
    }

    console.log(nums);
}