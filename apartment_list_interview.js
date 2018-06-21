// You have a list of names of people which needs to be divided up into groups
// for lunch. Randomize the names and give a list of lists of names, each list
// should have between 3-5 names.

function nameMixer(x) {
var nameArray = x;
for (var i = 0; i < nameArray.length; i++) {
//randomize the names
var newArray = nameArray.slice(0, i+3);
}
return newArray;
}
console.log(nameMixer(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']));
