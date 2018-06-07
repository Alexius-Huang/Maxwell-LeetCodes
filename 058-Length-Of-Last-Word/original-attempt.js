/*
 * Given a string s consists of upper/lower-case alphabets and empty space
 * characters ' ', return the length of last word in the string.
 * 
 * If the last word does not exist, return 0.
 * 
 * Note: A word is defined as a character sequence consists of non-space
 * characters only.
 * 
 * Example:
 *   Input: "Hello World"
 *   Output: 5
 * 
 */

/**
  * @param {string} s
  * @return {number}
  */
var lengthOfLastWord = function (s) {

  /***************************** My Solution Start *****************************/
  let count = 0;
  let occurLastWord = false;
  for (let i = s.length - 1; i > -1; i--) {
    if (!occurLastWord && s[i] == ' ') {
      continue;
    } else {
      occurLastWord = true;
    }
    if (s[i] != ' ') count++;
    else return count;
  }
  return count;
  /****************************** My Solution End ******************************/

};

/*
 *  Record:
 *    Accomplished date: 2018/06/07
 *    Rank: 97.65%
 */
