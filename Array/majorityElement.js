function majorityElement(nums) {
    let count = 0;
    let candidate = null;

    for(let num of nums) {
        if(count === 0) {
            candidate = num;
            count = 1;
        } else if(candidate === num) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
}

let nums = [1, 1, 1, 2, 2, 2, 2, 3];
console.log(majorityElement(nums));