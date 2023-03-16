const arr = [1, 2, 3];

arr.forEach((element) => console.log(element));

let n = 0;

while (n != arr.length) {
  console.log(arr[n]);
  n++;
}
n = 0;
do {
  console.log(arr[n]);
  n++;
} while (n != arr.length);

n = 0;
let s = arr.lenght + 1;
for (s in arr) {
  console.log(arr[n]);
  n++;
}

for (const value of arr) {
  console.log(value);
}

for (var i = 0; i != arr.length; i++) {
  console.log(arr[i]);
}

const arr2 = arr.map(Math.abs);
console.log(arr2);
