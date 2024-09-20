 function removeElement(nums, val) {
    let k = 0; // to count the elemet that are not equal to val

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) { // if yes it stores the element in nums[k] and increment k which is the number of element that are not equal to val
            nums[k] = nums[i];
            k++;//increment the k 
        }
       
    }
     return k; // return k when it finish the iteration
}
let nums = [1, 2, 2, 2, 2, 2, 3, 4, 5, 5];
let val = 0;
console.log(removeElement(nums, val));