function removeDuplicateItems(nums) {
    if(nums.length === 0) return 0;
    let k = 1;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    nums.length = k; // to trim the prevous or original array
    return k; // return the number of the unqiue element in new array
}
let nums = [1, 2, 3, 3];
console.log(removeDuplicateItems(nums));
console.log(nums);
