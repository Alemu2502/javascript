function twoMergeSortedArray(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n -1;

while(i >= 0 && j >= 0) {
    if(nums1[i] > nums2[j]) {
        nums1[k] = nums1[i];
        i--;
    } else {
        nums1[k] = nums2[j];
        j--;
    }
    k--;
}
 while(j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
 }

}

 let nums1 = [3, 4, 6];
 let nums2 = [1, 2, 5];
 let m = nums1.length;
 let n = nums2.length;
  twoMergeSortedArray(nums1, m, nums2, n);
 console.log(nums1);


