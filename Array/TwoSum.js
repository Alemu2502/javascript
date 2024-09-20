const  twoSum = function(nums, target) {
  let hash = {}; // dictionary to store the complement (target - number) and it's index
  let len = nums.length;

  for(let i = 0; i < len; i++) {
    let complement = target - nums[i]; // to find the complement
if(complement in hash) {
  return [hash[complement], i]; // to return the two indices (the prevous and the current index)
}
hash[nums[i]] = i;// othrewise store these key value pair
  }
 return [-1, -1]; // if no solution is provided

}

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));

