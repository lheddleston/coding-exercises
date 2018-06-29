#6

function checkPattern(pattern, str) {
  let strArr = str.split("");
  let dict = {};
  for (let i = 0; i < pattern.length; i++) {
    if (!dict[pattern[i]])
    dict[pattern[i]] = strArr[i];
    else if (dict[pattern[i] !== strArr[i]])
    return false;
  }
  return true;
}
