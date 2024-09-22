function rotateArray(nums, k) {
  let m = nums.length;
 let rotate = new Array().fill(m);
  for(let i = 0; i < m; i++) {
    rotate[(i + k) % m] = nums[i];
  }
  for(let i = 0; i < m; i++) {
       nums[i] =  rotate[i];
  }
  return nums;

}

let nums = [1, 2, 3, 4, 5, 7, 8];
let k = 3;
console.log(rotateArray(nums, k));