const removeElement = function (nums, val) {
  let uniquePointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[uniquePointer] = nums[i];
      uniquePointer++;
    }
  }
  return uniquePointer;
};
console.log(removeElement([1, 2, 3, 6, 3, 2, 2, 3], 3)); // 5
