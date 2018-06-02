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
  const mapOfNumbers = new Map();
  nums.forEach((number, index) => mapOfNumbers.set(number, index));

  for (let i = 0; i < nums.length; i++) {
    const complementary = target - nums[i];
    const indexOfComplementary = mapOfNumbers.get(complementary)
    if (indexOfComplementary && indexOfComplementary !== i) {
      return [i, indexOfComplementary];
    }
  }
  /****************************** My Solution End ******************************/

};

/*
 *  Record:
 *    Accomplished date: 2018/06/02
 *    Rank: 80.11%
 *    Complexity: O(n)
 */
