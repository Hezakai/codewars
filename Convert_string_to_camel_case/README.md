https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript



>Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
>
>Examples
>"the-stealth-warrior" gets converted to "theStealthWarrior"
>
>"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
>
>"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

# My Solution

I found this one to be fairly straight forward.  I first split the string into an array of characters.  Then I looped through the array and checked if the previous character was a dash or underscore.  If so I capitalized the current character and then removed the previous character.  I then joined the array back into a string and returned it.

```
function toCamelCase(str) {
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === "-" || arr[i - 1] === "_") {
      let letter = arr[i].toUpperCase();
      arr.splice([i], 1, letter);
      arr.splice([i - 1], 1);
    }
  }
  return arr.join('')
}

# Other Solutions

As always there are many different ways to solve these problems and those who are far better than I can do them in single lines.  Here are a few of the solutions I found interesting.  

```
function toCamelCase(str){
  return str.replace(/[_-]\w/gi, ch => ch[1].toUpperCase());
}
```

This solution uses the replace method to find the dash or underscore and then replace it with the next character capitalized.  I like this solution because uses regex to find the dash or underscore and then uses the replace method to replace it with the next character capitalized.

```
function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
```

This solution is very similar to the previous solution.  It also uses regex but applies it slightly differently.  I like both of these solutions because they are very concise and easy to read.  