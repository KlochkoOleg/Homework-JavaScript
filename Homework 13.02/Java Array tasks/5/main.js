const arr = [49, 4, 9, 16];
function convert(sqrtNumbers, arr) {
  console.log(sqrtNumbers(arr));
  console.log(arr);
}
function sqrtNumbers(arr) {
  return arr.map(Math.sqrt);
}
sqrtNumbers(arr);
convert(sqrtNumbers, arr);
