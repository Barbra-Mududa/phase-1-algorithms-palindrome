function isPalindrome(word) {
  // Write your algorithm here
const palindrome1= word.split("").reverse().join("");
if(word === palindrome1){
  return true
}else{
  return false
}
}

/* 
  Add your pseudocode here
*/

// variable = word.split.reverse
// if element returns a Boolean
// return result


/*
  Add written explanation of your solution here
*/

// reverse word
// compare reversed word and the initial word
// return true if the two give the same results
// otherwise return false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
