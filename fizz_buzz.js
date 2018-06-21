// Problem:
// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and for
// the multiples of five print “Buzz”. For numbers which are multiples of
// both three and five print “FizzBuzz”.
//

function fizzBuzz() {
  for (var i = 0; i <= 100; i++) {
    if (!(i % 3) || !(i %5)) {
      print i;
    }
    if (i % 3) {
      print 'Fizz';
    }
    if (i % 5) {
      print 'Buzz';
    }
  }
}
