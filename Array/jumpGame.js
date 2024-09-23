const canJump = function(nums) {
    let goal = nums.length - 1;//4
//i=0
    for(let i = nums.length - 2; i >= 0; i--) {
     if(i + nums[i] >= goal) {
        goal = i;//
     }
    }

    return goal === 0;
}

let nums = [4,2,1,0,4];
console.log(canJump(nums));