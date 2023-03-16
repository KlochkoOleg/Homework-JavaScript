function dividers(number) {
  for (var i = 1; i <= number; i++) {
    if (number % i == 0) console.log(i);
  }
}
(() => {
  let number = prompt("введите число");
  dividers(number);
})();
