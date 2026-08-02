/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.
The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.
*/
// nums = [0,0,1,1,1,2,2,3,3,4]

var removeDuplicates = function (nums) {
  let uniquePointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[uniquePointer]) {
      uniquePointer++;
      nums[uniquePointer] = nums[i];
    }
  }
  return uniquePointer + 1;
};
