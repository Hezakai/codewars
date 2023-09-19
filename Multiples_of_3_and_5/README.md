https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript



> If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.  Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.  Additionally, if the number is negative, return 0.
> 
> Note: If the number is a multiple of both 3 and 5, only count it once.
> 
> Courtesy of projecteuler.net (Problem 1)

# My Solution

Initially, I misinterpreted the instructions to mean that we were only testing for 3,5,6 and 9 so I hard coded those into an array and compared the value of number to the given array index then sadded to sum.  

```
function solution(number){
  const multiples = [3, 5, 6, 9]
  let sum = 0

  if (number <= 0) {
    return 0;
  } else {
    for (let i = 0; i < multiples.length; i++) {
      if (multiples[i] <= number) {
        sum += multiples[i];
      }
    }
    return sum;
  }
}
```

This did pass the initial test of number=10 but failed the submission as they test into the thousands.  So I realized I needed to rework the algo to first determine if i if a 3 or 5 multiple of number and then if so add to sum.  This passed all the submission tests.

```
function solution(number){
  let sum = 0

  if (number <= 0) {
    return 0;
  } else {
    for (let i = 0; i < number; i++) {
      if ( i % 3 === 0 || i % 5 === 0 ) {
        console.log("Adding ", i , " to ", sum)
        sum += i;
        console.log("which equals ", sum)
      }
    }
    return sum;
  }
}
```

This works but personally I find iy a bit verbose and rudimentary.  A ternary would be much better and after my submission I found two of them listed in the solutions sections.

```
function solution(number){
  return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}
```

and

```
solution= n=> n<=0?0:Array.from({length: n}, (_,i) => (i%3==0||i%5==0)?i:0).reduce((x,y)=>x+y)
```