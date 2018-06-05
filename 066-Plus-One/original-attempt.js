/*
 * Given a non - empty array of digits representing a non - negative integer,
 * plus one to the integer.
 * 
 * The digits are stored such that the most significant digit is at the head
 * of the list, and each element in the array contain a single digit.
 * 
 * You may assume the integer does not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example 1:
 *   Input: [1, 2, 3]
 *   Output: [1, 2, 4]
 *   Explanation: The array represents the integer 123.
 * 
 * Example 2:
 *   Input: [4, 3, 2, 1]
 *   Output: [4, 3, 2, 2] 
 *   Explanation: The array represents the integer 4321.
 * 
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

  /***************************** My Solution Start *****************************/
  const { length: lengthOfDigits } = digits;
  if (lengthOfDigits === 0) {
    digits.push(1);
  } else if (digits[lengthOfDigits - 1] === 9) {
    digits.pop();
    plusOne(digits);
    digits.push(0);
  } else {
    digits[lengthOfDigits - 1]++;
  }
  return digits;
  /****************************** My Solution End ******************************/

};

/*
 *  Record:
 *    Accomplished date: 2018/06/05 
 *    Rank: 76.41%
 *    Other: Recursive Approach
 */
