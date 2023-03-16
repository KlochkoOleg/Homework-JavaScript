const arr = [];
function sumInputNumbers(arr) {
  var age = 1;
  var summa = 0;
  while (!isNaN(age) && age != "") {
    age = prompt("Введите значение: ");
    if (!isNaN(age) && age != "") {
      arr.push(age);
      summa += parseInt(age);
    }
  }
  console.log(summa);
}
sumInputNumbers(arr);
