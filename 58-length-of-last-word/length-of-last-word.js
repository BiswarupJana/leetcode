/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim(); // Remove trailing spaces
var words = s.split(" ");
var lastWordLength = words[words.length - 1].length;
    return lastWordLength;
};