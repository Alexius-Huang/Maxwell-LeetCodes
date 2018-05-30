/*
 * Given a 32 - bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 * Input: 123
 * Output: 321
 * 
 * Example 2:
 * Input: -123
 * Output: -321
 * 
 * Example 3:
 * Input: 120
 * Output: 21

 * Note:
 * Assume we are dealing with an environment which could only store integers within
 * the 32 - bit signed integer range: [−2^31, 2^31− 1]. For the purpose of this
 * problem, assume that your function returns 0 when the reversed integer overflows.
 *
 */

/**
 * @param {number} x
 * @return {number}
 */

const bound = Math.pow(2, 31);

var reverse = function (x) {

  /***************************** My Solution Start *****************************/
  const isNegative = x < 0;
  const number = Math.abs(x);
  const reversedNumber = Number.parseInt(String(number).split('').reverse().join(''));
  if ((isNegative && reversedNumber > bound) || (!isNegative && reversedNumber > bound - 1)) {
    return 0;
  }
  return isNegative ? -reversedNumber : reversedNumber;
  /****************************** My Solution End ******************************/

};

/*
 *  Record:
 *    Accomplished date: 2018/05/30
 *    Rank: 46.20%
 */
