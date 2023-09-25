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
