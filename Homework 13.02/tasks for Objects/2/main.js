let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function summa(salaries) {
  var sum = 0;
  sum = salaries.Ann + salaries.Pete + salaries.John;
  if (sum != 0) {
    return console.log(sum);
  } else {
    return console.log(0);
  }
}
summa(salaries);
