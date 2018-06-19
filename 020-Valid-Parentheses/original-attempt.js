/*
 * Given a string containing just the characters '(', ')', '{', '}', '['
 * and ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 *   1. Open brackets must be closed by the same type of brackets.
 *   2. Open brackets must be closed in the correct order.
 * 
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 *   Input: "()"
 *   Output: true
 * 
 * Example 2:
 *   Input: "()[]{}"
 *   Output: true
 * 
 * Example 3:
 *   Input: "(]"
 *   Output: false
 * 
 * Example 4:
 *   Input: "([)]"
 *   Output: false
 * 
 * Example 5:
 *   Input: "{[]}"
 *   Output: true
 * 
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

  /***************************** My Solution Start *****************************/
  const cache = [];

  for (let char of s) {
    if (char == '(' || char == '[' || char == '{') {
      cache.push(char);
    } else if (
      (char == ')' && cache.pop() !== '(') ||
      (char == ']' && cache.pop() !== '[') ||
      (char == '}' && cache.pop() !== '{')
    ) return false;
  }

  return cache.length == 0;
  /****************************** My Solution End ******************************/

};

/*
 *  Record:
 *    Accomplished date: 2018/06/19
 *    Rank: 94.88%
 */
