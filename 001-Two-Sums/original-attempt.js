/*
 * Given an array of integers, return indices of the two numbers such that they add
 * up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may not
 * use the same element twice.
 *
 * Example:
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 */
var twoSum = function (nums, target) {

  /***************************** My Solution Start *****************************/
  for (let i = 0, pivot = nums[i]; i < nums.length; i++ , pivot = nums[i]) {
    for (let j = i + 1; j < nums.length; j++) {
      if (pivot + nums[j] === target) return [i, j];
    }
  }
  /****************************** My Solution End ******************************/

};

/*
 *  Record:
 *    Accomplished date: 2018/05/30 
 *    Rank: 60.48%
 *    Complexity: O(n^2)
 */
