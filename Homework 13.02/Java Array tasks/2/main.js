const arr = [1, 5, 0, -5, 30, 100, -500, 3, 300, 55];

function outputNumbers(arr) {
  for (var i = 0; i != arr.length; i++) {
    if (arr[i] < 5) console.log(arr[i]);
  }
}

outputNumbers(arr);

function minMax(arr) {
  console.log(Math.min.apply(Math, arr));
  console.log(Math.max.apply(Math, arr));
}

minMax(arr);

function arraySort(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  arr.reverse();
  arr.forEach((element) => console.log(element));
}
arraySort(arr);

function outputNumberSum(arr) {
  var y = 0;
  var s = 0;
  for (var i = 0; i != arr.length; i++) {
    y += arr[i];
  }
  s = y / arr.length;
  for (var i = 0; i != arr.length; i++) {
    if (arr[i] > s) console.log(arr[i]);
  }
}

outputNumberSum(arr);
