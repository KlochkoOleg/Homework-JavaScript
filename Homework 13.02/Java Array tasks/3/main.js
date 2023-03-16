const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles.forEach((element) => console.log(element));

function outputNumberSum(styles) {
  var y = 0;
  var s = 0;
  for (var i = 0; i != styles.length; i++) {
    y += styles[i];
  }
  s = Math.floor(styles.length / 2);
  styles.splice(s, 1, "Классика");
  styles.forEach((element) => console.log(element));
}

outputNumberSum(styles);

console.log(styles.shift());
styles.forEach((element) => console.log(element));

styles.unshift("Рэп");
styles.unshift("Регги");
