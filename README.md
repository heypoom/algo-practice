# Algorithm Practice

## Questions I'm still stuck on.

These took me **minimum of 30 minutes up to maximum of 1 hour**, and I can't figure out how to solve or approach the problem.

- Currently Empty.

## Backlog (Haven't tried these yet, but I want to try next.)

- Course Schedule II
- Minimum Window Substring

## 173. Binary Search Tree Iterator

- Time: 35 mins.
- Time Complexity: O(N) for building the nodes array initially, O(1) for next and hasNext.
- Space Complexity: O(N) where N is number of nodes in the tree, used for toring the nodes in an array.

- Tags: Binary Tree, In Order Traversal

- [LeetCode Submission](https://leetcode.com/submissions/detail/300436172)
- [Solution](173-binary-search-tree-iterator.js)

## 253. Meeting Rooms II

- Time: 28 mins.
- Time Complexity: O(N log N) where N is number of input intervals. O(N log N) is for sorting.
- Space Complexity: O(N) for storing starts and ends array.

- Tags: Intervals, Sorting

- [LeetCode Submission](https://leetcode.com/submissions/detail/300432380)
- [Solution](253-meeting-rooms-ii.js)

## 123. Best Time to Buy and Sell Stock III

- Time: 70 mins
- Time Complexity: O(N) where N is the length of input array.
- Space Complexity: O(1), no extra space.

- Tags: Dynamic Programming

- [LeetCode Submission](https://leetcode.com/submissions/detail/300428259)
- [Solution](123-best-time-to-buy-and-sell-stock-iii.js)

## 543. Diameter of Binary Tree

- Time: 22 mins
- Time Complexity: O(N) where N is count of nodes in the tree.
- Space Complexity: O(1)

- Tags: Binary Tree, Recursion

- [LeetCode Submission](https://leetcode.com/submissions/detail/300424207)
- [Solution](543-diameter-of-binary-tree.js)

## 32. Longest Valid Parentheses

- Time: 48 mins.
- Time Complexity: O(N) where N is string length
- Space Complexity: O(N) where N is string length, used for stack array.

- Tags: Stack

- [LeetCode Submission](https://leetcode.com/submissions/detail/300421410)
- [Solution](32-longest-valid-parentheses.js)

## 317. Shortest Distance from All Buildings

- Time: 56 mins
- Time Complexity: O((R * C)^2), where R is row length and C is column length.
- Space Complexity: O(R * C), extra space is used for an array storing distance for each points.

- Tags: Graph, BFS, 2D Grid

- [LeetCode Submission](https://leetcode.com/submissions/detail/299878784)
- [Solution](317-shortest-distance-from-all-buildings.js)

## 416. Partition Equal Subset Sum

- Time: 43 mins.
- Time Complexity: O(N ^ 2) where N is length of input array, worst case.

- Tags: Recursion, Dynamic Programming, HashMap

- [LeetCode Submission](https://leetcode.com/submissions/detail/299863102)
- [Solution](416-can-partition.js)

## 124. Binary Tree Maximum Path Sum

- Time: 30 mins
- Time Complexity: O(N) where N is amount of node in the tree.
- Space Complexity: O(1), no additional space required.

- Tags: Tree, Binary Tree, Dynamic Programming, Recursion

- [LeetCode Submission](https://leetcode.com/submissions/detail/299882550)
- [Solution](124-binary-tree-max-path-sum.js)

## 133. Clone Graph

- Time Complexity: O(V + E) where V is vertex count, and E is edge count.
- Space Complexity: O(V) where V is vertex stored in the BFS queue.

- Time: 28 mins
- Tags: Graph, BFS

- [LeetCode Submmission](https://leetcode.com/submissions/detail/299880929)
- [Solution](133-clone-graph.js)

# 621. Task Scheduler

- Time: 30 mins.
- Time Complexity: O(N) where N is the number of tasks given.
- Space Complexity: O(1), because the additional array space is constantly 26.

- Tags: Dynamic Programming

- [LeetCode Submission](https://leetcode.com/submissions/detail/299859922)
- [Solution](621-task-scheduler.js)

## 42. Trapping Rain Water

- Time Complexity: O(N) where N is the length of input height array.
- Space Complexity: O(1), no additional space required.

- Time: 50 mins.

- [LeetCode Submission](https://leetcode.com/submissions/detail/299893222)
- [Solution](42-trapping-rain-water.js)

## 15. Three Sum

- Time: 41 mins.
- Time Complexity: O(N^2) where N is the length of input array.
- Space Complexity: O(1) -- no extra space, excluding the answer array.

- Tags: Dynamic Programming, Two Pointers

- [Solution](15-three-sum.js)
- [LeetCode Submission](https://leetcode.com/submissions/detail/299891170)

## 721. Accounts Merge

- Pong: All good

- Time: 50 mins.

- Tags: Graph, HashMap, Set, BFS

- [Solution](721-accounts-merge.js)

## 10. Regular Expression Matching

- Pong: Incorrect. Please submit it to Leetcode first before putting it here.

Note: I looked at the solution and tried to understand how it works. Didn't fully grasp how this works yet.

- [Solution](10-regex-matching.js)

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

- Vee: try to come up with constant space solution (you can check the solution or ask Pong, P'Nok, P'Neoi)

- Time Complexity: O(N) where N is count of numbers

- Space Complexity: O(N) where N is count of numbers (used for Map)

- Tags: HashMap

- [Solution](41-first-missing-positive.js)

## Find the longest common part tail of a linked list.

- Vee: try to come up with constant space solution by not creating new node. you're almost there.

  hint: instead of copying over the value, remember the head of the common and reset the head when you found that the elements are no longer common

  for the test cases when you're having the interview, don't forget to cover all the edge cases na. (e.g. [null, null], [null, 1], etc.)

- Time Complexity: O(max(A, B)) where A, B is the number of children nodes in the linked list

- Tags: Linked List

- [Solution](longest-tail.js)
- [Solution B](kth-to-last.js)

## Overlapping Intervals (Peak Visit Times in a Restaurant)

- Vee: try with this test case still produces incorrect answer `getHighVisitTimes(2, 1, [[1, 2], [3, 4]])`
for explaining space complexity, you should count i, j, or visits variables as an extra 'constant' space

- Time Complexity: O(N) where N is the number of input intervals.

- Space Complexity: O(1), no additional space required except for the answer.

- Tags: Intervals, Two Pointers

- [Solution](restaurant-high-visit-times.js)

## 128. Longest Sequence of Consequtive Integers.

- Vee: good ja

- Time Complexity: O(N) where N is the length of the input array.

- Space Complexity: O(N) where N is the length of the input array.

- Tags: HashMap, Two Pointers

- [Solution](128-longest-sequence.js)

## 215. K Largest Element in Array (Quick Select)

- Vee: good ja

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

- Vee: this is not the optimal solution na, but the optimal seems to be too difficult

  wondering why we need to `recompute(i - 1)` (why don't we just `recompute(i)`?)

- Time Complexity:
  - O(N) where N is length of array, used in preprocessing and update.
  - O(1) for lookup

- Space Complexity: O(N) where N is length of array, which is used for storing memoized data.

- Tags: Dynamic Programming

- [Solution](307-range-sum-query-mutable.js)

## 307p. Range Sum Query Static

- Vee: good ja

- Time Complexity:
  - O(N) where N is length of array, used in preprocessing.
  - O(1) for lookup

- Space Complexity: O(N) where N is length of array, which is used for storing memoized data.

- Tags: Dynamic Programming

- [Solution](307p-range-sum-query-static.js)

## 689. Maximum Sum of 3 Non-Overlapping Subarrays.

- Pong: Incorrect. Please submit it to Leetcode first before putting it here.

- Time Complexity: O(N) where N is length of array.

- Space Complexity: O(N) where N is length of array, used for storing memo tables.

- Tags: Dynamic Programming, Overlapping Subarrays

- [Solution](689-maximum-sum-of-3-non-overlapping-subarrays.js)

## Find Duplicate Integer in array 1..N where each value is <= N

- Vee: good ja

- Time Complexity: O(N) where N is the length of array.

- Space Complexity: O(1)

- Tags: Two Pointers (Fast and Slow)

- [Solution](find-duplicate-integer-in-array-when-each-value-is-leq-n.js)

## Implement merge sort.

- Vee: good ja

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

- Vee: incorrect. you forgot to reset `carry` value na. (try with `sum(make(9, 0, 9), make(9, 0, 9))` 909+909 = 1818)

- Tags: Linked List

- [Solution](ll-sum-list.js)

## Random function with blacklisting

- Pong: Is incorrect; `console.log(createRandom(10, [2, 4, 6, 8])()) -> got 2`

- Tags: HashMap

- [Solution](random-function-with-blacklist.js)

## Is String Permutation

- Vee: looks good na. what about time/space complexity?

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

- Vee: The code does not look right/complete to me. Try to code on this na: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
  Don't forget the time and space complexity

- Tags: Linked List

- [Solution](ll-dedupe.js)

## Delete a middle node (not first and last) from a linked list.

- Vee: good ja
  follow up: maybe if you have time, try remove the middle node ((n/2)th node) in one go using 2 pointers method
  hint: one pointer (`i`) moves one node at a time, another pointer (`j`) moves two node (skip every other one node) at the same time. when pointer `j` reaches the end of the list, pointer `i` will point to the n/2 node

- Tags: Linked List

- [Solution](ll-delete-mid-node.js)

## Insert a new node with an integer value of x after index i.

- Vee: good ja

- Tags: Linked List

- [Solution](ll-insert.js)

## Get intersection of a linked list.

- Vee: I think the code is correct. Can I ask time/space complexity for this algorithm? Can you make it faster by using more space?

- Tags: Linked List

- [Solution](ll-intersect.js)

## Invert a linked list.

- Vee: good ja

- Tags: Linked List

- [Solution](ll-invert.js)

## Is the linked list a palindrome?

- Vee: look good ja

- Tags: Linked List

- [Solution](ll-is-palindrome.js)

## Delete nth node from a linked list.

- Vee: incorrect na. try with `removeAt(make(0, 1, 2, 3, 4, 5), 0)`

- Tags: Linked List

- [Solution](ll-remove.js)

## De-duplicate a sorted linked list

- Vee: incorrect na, try with this test case: `uniq(make(5, 4, 3, 3, 2, 1)))`. I suggest you initiate with `var node = root.next`  instead of `var node = root` that might be easier to handle the logic.

- Tags: Linked List

- [Solution](ll-sorted-remove-dupe.js)

## Find longest substring in a string.

- Pong: I'm not sure what the question is

- Tags: String, HashMap

- [Solution](longest-substring.js)

## Merge Sorted Array

- Vee: look good ka. what about time/space complexity?

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
