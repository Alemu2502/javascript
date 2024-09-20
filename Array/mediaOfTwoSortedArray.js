var findMedianSortedArrays = function(nums1, nums2) {
  var len1 = nums1.length;
  var len2 = nums2.length;
  var total = len1 + len2;

  if (total % 2) {
    return findKthOfTwoSortedArrays(nums1, len1, nums2, len2, parseInt(total / 2 + 1));
  } else {
    return (findKthOfTwoSortedArrays(nums1, len1, nums2, len2, total / 2)
        + findKthOfTwoSortedArrays(nums1, len1, nums2, len2, total / 2 + 1)) / 2;
  }
};

function findKthOfTwoSortedArrays (p, m, q, n, k) {

    if (m > n) {
        return findKthOfTwoSortedArrays(q, n, p, m, k);
    }

    if (m === 0) {
        return q[k - 1];
    }

    if (k === 1) {
        return Math.min(p[0], q[0]);
    }

    var pa = Math.min(parseInt(k / 2), m);
    var qa = k - pa;

    if (p[pa - 1] < q[qa - 1]) {
        return findKthOfTwoSortedArrays(p.slice(pa), m - pa, q, n, k - pa);
    } else if (q[qa - 1] < p[pa - 1]) {
        return findKthOfTwoSortedArrays(p, m, q.slice(qa), n - qa, k - qa);
    } else {
        return p[pa - 1];
    }
}

nums1 = [1, 2];
nums2 = [3, 4];

console.log(findMedianSortedArrays(nums1, nums2));