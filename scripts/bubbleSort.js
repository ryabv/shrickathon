function bubbleSort(nums) {            
    for (let i = 1; i <= nums.length; i++) {
        for (let j = 0; j <= nums.length - i; j++) {
            if (nums[j] <= nums[j-1]) {
                let tmp = nums[j-1];
                nums[j-1] = nums[j];
                nums[j] = tmp;
            }
        }
    }

    console.log(nums);
}