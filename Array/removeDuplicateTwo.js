const removeDuplicat = function(nums) {// function expression
    let k = 2;// start the index at position 2;

    for(let i = 2; i < nums.length; i++) {
        if(nums[i] !== nums[k -2]) { // check the element if duplicated greater than 2
         nums[k] = nums[i];// store the value starting at index 2;
         k++;
        }
    }
    nums.length = k;
    return k;
}

let nums = [1, 1, 1, 2, 2, 2, 3, 3, 3];
console.log(removeDuplicat(nums));
console.log(nums);