function merge(nums1, m, nums2, n) {
  let t1 = m - 1
  let t2 = n - 1
  let p = m + n - 1

  while (p >= 0) {
    if (t1 >= 0 && t2 >= 0 && nums1[t1] >= nums2[t2]) {
      nums1[p] = nums1[t1]
      t1--
    } else if (t1 >= 0 && t2 >= 0) {
      nums1[p] = nums2[t2]
      t2--
    } else if (t1 >= 0) {
      nums1[p] = nums1[t1]
      t1--
    } else if (t2 >= 0) {
      nums1[p] = nums2[t2]
      t2--
    }

    p--
  }
}

let a = [1, 2, 3, 0, 0, 0]
let b = [4, 5, 6]

merge(a, 3, b, 3)
console.log(a)
