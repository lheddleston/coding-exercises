// Write a function that takes an array of characters and reverses the letters in-place.
//
// Why an array of characters instead of a string?
//
// The goal of this question is to practice manipulating strings in place.
// Since we're modifying the input, we need a mutable type like an array,
// instead of JavaScript's immutable strings.


// write function that takes an array and reverses the letters in place
// the output will be the same array with the letters reversed
// possible edge cases: odd or even number array, zero and one length arrays, long one,


charArray = ['a', 'b', 'c', 'd', 'e', 'f']

function reverseArray(charArray) {

  var half = Math.floor(charArray.length/2);

  for (var i = 0; i < half; i++) {
   	const endIndex = charArray.length - 1 - i;
    const firstChar = charArray[i];
		charArray[i] = charArray[endIndex];
    charArray[endIndex] = firstChar;
  }

  return charArray;
}

function reverseArray(charArray) {
  returnArray = []
  for (var i = charArray.length -1; i >= 0; i--) {
    returnArray.push(charArray[i]);
  }
  return returnArray;
}

console.log(reverseArray(charArray));
