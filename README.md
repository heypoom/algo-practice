# Algorithm Practice

## Questions I'm still stuck on.

These took me **minimum of 30 minutes up to maximum of 1 hour**, and I can't figure out how to solve or approach the problem.

- Best Time to Buy and Sell Stock III: I knew this must use DP with 2-dimensional array, but can't figure out how. -> `Try doing this one (https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) in O(N) first`

## Backlog (Haven't tried these yet, but I want to try next.)

- 301. Remove Invalid Parentheses
- Meeting Rooms II
- Course Schedule II
- Minimum Window Substring

## 133. Clone Graph

- Time Complexity: O(V + E) where V is vertex count, and E is edge count.
- Space Complexity: O(V) where V is vertex stored in the BFS queue.

- Time: 28 mins
- Tags: Graph, BFS

- [LeetCode Submmission](https://leetcode.com/submissions/detail/299880929)
- [Solution](133-clone-graph.js)

## 317. Shortest Distance from All Buildings

- Time: 56 mins
- Time Complexity: O((R * C)^2), where R is row length and C is column length.
- Space Complexity: O(R * C), extra space is used for an array storing distance for each points.

- Tags: Graph, BFS, 2D Grid

- [LeetCode Submission](https://leetcode.com/submissions/detail/299878784)
- [Solution](317-shortest-distance-from-all-buildings.js)

# 416. Partition Equal Subset Sum

- Time: 43 mins.
- Time Complexity: O(N ^ 2) where N is length of input array, worst case.

- Tags: Recursion, Dynamic Programming, HashMap

- [LeetCode Submission](https://leetcode.com/submissions/detail/299863102)
- [Solution](416-can-partition.js)

# 621. Task Scheduler

- Time: 30 mins.
- Time Complexity: O(N) where N is the number of tasks given.
- Space Complexity: O(1), because the additional array space is constantly 26.

- Tags: Dynamic Programming

- [LeetCode Submission](https://leetcode.com/submissions/detail/299859922)
- [Solution](621-task-scheduler.js)

## 721. Accounts Merge

- Pong: All good

- Time: 50 mins.

- Tags: Graph, HashMap, Set, BFS

- [Solution](721-accounts-merge.js)

## 42. Trapping Rain Water

- Pong: Please do this within O(N) time complexity

- Time Complexity: O(N ^ 2) where N is the length of input height array.

- Space Complexity: O(1), no additional space required.

- Time: 40 mins.
- Note: This is brute force. I think dynamic programming is possible, will try it later.

- [Solution](42-trapping-rain-water-brute-force.js)

## 10. Regular Expression Matching

- Pong: Incorrect. Please submit it to Leetcode first before putting it here.

Note: I looked at the solution and tried to understand how it works. Didn't fully grasp how this works yet.

- [Solution](10-regex-matching.js)

## 124. Binary Tree Maximum Path Sum

- Pong: Incorrect. Please submit it to Leetcode first before putting it here.

- Time Complexity: O(N) where N is amount of node in the tree.

- Space Complexity: O(1), no additional space required.

- Tags: Tree, Binary Tree, Dynamic Programming, Recursion

- [Solution](124-binary-tree-max-path-sum.js)

## 1249. Minimum Remove to Make Valid Parentheses

- Pong: All good

- Time Complexity: O(N) where N is the number of characters.

- Space Complexity: O(N) for storing stack of parentheses.

- Time: 26 mins
- Tags: Stack

- [Solution](1249-minimum-remove-to-make-valid-parentheses.js)

## 986. Interval List Intersections

- Pong: All good

- Time Complexity: O(A + B) where A and B are length of input intervals.

- Space Complexity: O(1), no additional space required.

- Time: 32 mins
- Tags: Interval

- [Solution](986-interval-list-intersections.js)

## 41. First Missing Positive Integer

- Time Complexity: O(N) where N is count of numbers

- Space Complexity: O(N) where N is count of numbers (used for Map)

- Tags: HashMap

- [Solution](41-first-missing-positive.js)

## Find the longest common part tail of a linked list.

- Time Complexity: O(max(A, B)) where A, B is the number of children nodes in the linked list

- Tags: Linked List

- [Solution](longest-tail.js)
- [Solution B](kth-to-last.js)

## Overlapping Intervals (Peak Visit Times in a Restaurant)

- Time Complexity: O(N) where N is the number of input intervals.

- Space Complexity: O(1), no additional space required except for the answer.

- Tags: Intervals, Two Pointers

- [Solution](restaurant-high-visit-times.js)

## 128. Longest Sequence of Consequtive Integers.

- Time Complexity: O(N) where N is the length of the input array.

- Space Complexity: O(N) where N is the length of the input array.

- Tags: HashMap, Two Pointers

- [Solution](128-longest-sequence.js)

## 215. K Largest Element in Array (Quick Select)

- Time Complexity: O(N) where N is the length of the input array, worst case.

- Space Complexity: O(1), no additional space required.

- Tags: Quick Select, Recursion, Partitioning

- [Solution](215-k-largest-element-in-array.js)

## 304. Range Sum Query 2D Immutable

- Pong: Incorrect. Please submit it to Leetcode first before putting it here. Please do the lookup within O(1)

- Time Complexity:
  - O(R * C) for building memo tables, where R is row count and C is column count.
  - O(N) lookup where N is row count.

- Space Complexity: O(R * C) where R is row count and C is column count

- Tags: Dynamic Programming, 2D Grid

- [Solution](304-range-sum-query-2d-immutable.js)

## 307. Range Sum Query Mutable

- Time Complexity:
  - O(N) where N is length of array, used in preprocessing and update.
  - O(1) for lookup

- Space Complexity: O(N) where N is length of array, which is used for storing memoized data.

- Tags: Dynamic Programming

- [Solution](307-range-sum-query-mutable.js)

## 307p. Range Sum Query Static

- Time Complexity:
  - O(N) where N is length of array, used in preprocessing.
  - O(1) for lookup

- Space Complexity: O(N) where N is length of array, which is used for storing memoized data.

- Tags: Dynamic Programming

- [Solution](307p-range-sum-query-static.js)

## Three Sum

- Time Complexity: O(N^2) where N is the length of input array.

- Space Complexity: O(1) -- no extra space, excluding the answer array.

- Tags: Dynamic Programming, Two Pointers

- [Solution](three-sum.js)

## 689. Maximum Sum of 3 Non-Overlapping Subarrays.

- Pong: Incorrect. Please submit it to Leetcode first before putting it here.

- Time Complexity: O(N) where N is length of array.

- Space Complexity: O(N) where N is length of array, used for storing memo tables.

- Tags: Dynamic Programming, Overlapping Subarrays

- [Solution](689-maximum-sum-of-3-non-overlapping-subarrays.js)

## Find Duplicate Integer in array 1..N where each value is <= N

- Time Complexity: O(N) where N is the length of array.

- Space Complexity: O(1)

- Tags: Two Pointers (Fast and Slow)

- [Solution](find-duplicate-integer-in-array-when-each-value-is-leq-n.js)

## Implement merge sort.

- Time Complexity: O(N log N)

- Tags: Sorting

- [Solution](merge-sort.js)

## Intersection of Two Arrays

- Tags: Two Pointers, HashMap

- [Solution using Two Pointers](intersection-arr.js)
- [Solution using HashMap](intersection-arr-map.js)

## Is Parenthesis Valid

- Tags: Stack

- [Solution using Stack](is-paren-valid.js)

## Parenthesis Permutation

- Tags: Permutation, Recursion

- [Efficient Solution](paren-perm-efficient.js)
- [Solution](paren-perm.js)

## Move Zeros

- Tags: In Place

- [Solution](move-zero.js)

## Num Decodings

- Pong: Incorrect. Please submit it to Leetcode first before putting it here.

- https://leetcode.com/problems/decode-ways/

- Tags: HashMap

- [Solution](num-decodings.js)

## Minimum Window Substring

- Pong: Incorrect. Please submit it to Leetcode first before putting it here. `console.log(substr('ADOBECODEBANC', 'ABC')) -> ADOBEC`

- [Solution](minimum-window-substring.js)

## 7. Merge Binary Search Tree.

- Pong: All Good

- Tags: Binary Search Tree, Recursion

- [Solution](7-merge-bst.js)

## Add two numbers as a linked list.

- Pong: All Good

- Tags: Linked List

- [Solution](add-two-numbers-ll.js)

## Minimal Tree: Create a BST with minimal height.

- [Solution](minimal-tree-bst-minimal-height.js)

- Tags: Binary Search Tree, Recursion

## Num Islands

- Pong: Try to do this with O(1) extra memory

- Tags: 2D Map, Recursion

- [Solution](num-islands.js)

## Flood Fill

- Tags: 2D Map, Recursion

- [Solution](flood-fill.js)

## Word Segmentation

- Tags: HashMap

- [Solution using Map](word-segmentation.js)

## Binary Search

- Pong: All Good

- Tags: Binary Search

- [Solution](binary-search.js)

## Sum of a Binary Tree

- Pong: All Good

- Tags: Binary Tree, Recursion

- [Solution](binary-tree-sum-all.js)

## Print Spiral with Recursion

- Tags: Recursion

- [Solution](spiral.js)

## Implement the square root function without sqrt()

- Tags: Binary Search, Two Pointers

- [Solution](square-root-without-sqrt.js)

## Coins to Bills

- [Solution](coins-to-bills.js)

## Fibonacci

- Tags: Dynamic Programming

- [Solution](fib-dp.js)

## 2D Map Traversal

- Tags: 2D Map

- [Solution](2d-map-traverse.js)

## Graph Traversal: DFS and BFS

- Tags: Graph

- [Solution](graph-bfs-dfs.js)

## Implement a Hash Map

- Tags: HashMap

- [Solution](impl-hmap.js)

## String Compression

- Tags: String

- [Solution](string-compression.js)

## Sum a linked list representation of two numbers.

- Tags: Linked List

- [Solution](ll-sum-list.js)

## Random function with blacklisting

- Pong: Is incorrect; `console.log(createRandom(10, [2, 4, 6, 8])()) -> got 2`

- Tags: HashMap

- [Solution](random-function-with-blacklist.js)

## Is String Permutation

- Tags: HashMap

- [Solution](is-perm.js)

## Is Tree Balanced

- Tags: Binary Tree

- [Solution](is-tree-balanced.js)

## Is all characters in string unique

- Pong: All good

- Tags: String

- [Solution](is-unique.js)

## Deduplicate a linked list.

- Tags: Linked List

- [Solution](ll-dedupe.js)

## Delete a middle node (not first and last) from a linked list.

- Tags: Linked List

- [Solution](ll-delete-mid-node.js)

## Insert a new node with an integer value of x after index i.

- Tags: Linked List

- [Solution](ll-insert.js)

## Get intersection of a linked list.

- Tags: Linked List

- [Solution](ll-intersect.js)

## Invert a linked list.

- Tags: Linked List

- [Solution](ll-invert.js)

## Is the linked list a palindrome?

- Tags: Linked List

- [Solution](ll-is-palindrome.js)

## Delete nth node from a linked list.

- Tags: Linked List

- [Solution](ll-remove.js)

## De-duplicate a sorted linked list

- Tags: Linked List

- [Solution](ll-sorted-remove-dupe.js)

## Find longest substring in a string.

- Pong: I'm not sure what the question is

- Tags: String, HashMap

- [Solution](longest-substring.js)

## Merge Sorted Array

- Tags: In Place, Two Pointers

- [Solution](merge-sorted-array-inplace.js)

## Max Stock Profit

- Pong: Please change this to O(n)

- Tags: Dynamic Programming

- [Solution](max-profit.js)

## Tree Traversal with BFS/DFS

- Pong: All good

- Tags: Binary Tree

- [Solution](tree-bfs-dfs.js)

## Otello with Recursion

- Tags: Recursion

- [Solution](otello.js)

## String Palindrome Permutation

- Pong: All good

- Tags: HashMap

- [Solution](palind-perm.js)

## Is String Palindrome

- Pong: All good

- [Solution](palindrome.js)

## Path with Maximum Gold

- Pong: Incorrect; Syntax error

- [Solution](path-maximum-gold.js)

## Implement Quicksort

- Pong: All good

- Tags: Sorting

- [Solution](quick-sort.js)

## Reverse Integer

- Pong: All good

- [Solution](reverse-integer.js)
- [Solution B](reverse-integer-b.js)

## Remove all occurences of duplicates from a linked list

- Pong: This one is incorrect. `log(removeDupes(make(0, 0)))`

- Tags: Linked List

- [Solution](remove-all-dupes.js)

## Remove the duplicate elements from a linked list

- Pong: This isn't a linked list..  Do you want to rewrite this one with a linked list instead of an array?

- Tags: Linked List

- [Solution](remove-dupe.js)

## Bubble Sort

- Tags: Sorting

- [Solution](bubble-sort.js)

## Matrix Rotation

- Pong: Try doing this without using extra memory

- Tags: 2D Grid

- [Solution](rotate-matrix.js)

## Invert a Binary Tree

- Pong: All good

- Tags: Binary Tree

- [Solution](tree-invert.js)

## Url-ify a string

- Tags: String

- [Solution](url-ify.js)

## Zero Matrix

- Tags: 2D Grid

- [Solution](zero-matrix.js)
