function merge(nums1, m, nums2, n) {
  let t1 = m - 1
  let t2 = n - 1
  let p = m + n - 1

  while (p >= 0) {
    let a = nums1[t1]
    let b = nums2[t2]

    if (t1 >= 0 && t2 >= 0 && a >= b) {
      nums1[p] = a
      t1--
    } else if (t1 >= 0 && t2 >= 0) {
      nums1[p] = b
      t2--
    } else if (t1 >= 0) {
      nums1[p] = a
      t1--
    } else if (t2 >= 0) {
      nums1[p] = b
      t2--
    }

    console.log(nums1, p, t1, t2)

    p--
  }
}

let A = [3, 4, 5, 0, 0, 0]
let B = [-1, 0, 3]

merge(A, 3, B, 3)
console.log(A, B)
