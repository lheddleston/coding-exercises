If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9.
The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

// Math Stuff
//
// 999/3 -> number of multiples of 3 - 333
// (999+3)/2 -> mean multiples = 501
// Product 166833
//
// 995/5 - 199
// (995+5)/2 = 500
// Product 99500
//
// Remove both multiples of 3 and 5
//
// 990/15 = 66
// (1005)/2 = 502.5
// Product 33165
//
// Sum together   266333-33165
//
// Answer: 233168


var sum = 0;
for (var i = 0; i < 1000; i ++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log('Sum: %d', sum);
