// Below is the input and output for a function. Figure out what it does and
// then write the function to do it.
//
// ('aaabcc dddee ff f') => 'ad'
//('hhhheeellooo tttthere') => 'ht'
// (thenn there are lotts of letters') => 'ntt'

function mostRepeatedCharacters(str) {
  const result = {};
  let thisChar;
  let nextChar;
  let highCount = 0;
  let count = 1;
  for (let i=0; i<str.length; i++) {
    thisChar = str[i];
    nextChar = str[i+1];
    if (nextChar === thisChar) {
     count ++;
    }
    else {
      result[count] = result[count] ? result[count] : '';
      highCount = count > highCount ? count : highCount;
      result[count] = result[count] + thisChar;
      count = 1;
    }
  }
  return result[highCount];
}


console.log(mostRepeatedCharacters('aaaabcc ddddeeee ffff'));
