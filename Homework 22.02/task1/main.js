document.body.style.background = "red";
setTimeout(() => (document.body.style.background = "green"), 3000);
const button = document.getElementById("addButton");

function changeBackground() {
  document.body.style.background = "orange";
}

const ol = document.getElementById("addNew");
button.addEventListener("click", changeBackground);
var i = 1;
function adding() {
  if (i != 21) {
    var newList = document.createElement("li");
    newList.textContent = "Элемент " + i;
    ol.appendChild(newList);
    if (i % 2 == 0) {
      newList.style.background = "green";
    } else {
      newList.style.background = "purple";
    }
    i++;
    setTimeout(adding, 2000);
  }
}
adding();
const buttonplus = document.getElementById("plusnumber");
const text = document.getElementById("textnumber");
const buttonminus = document.getElementById("minusnumber");
verify();
buttonplus.addEventListener("click", changevalueplus);
buttonminus.addEventListener("click", changevalueminus);
function verify() {
  if (text.value == 0) {
    buttonplus.disabled = false;
    buttonminus.disabled = true;
  } else {
    if (text.value == 9) {
      buttonplus.disabled = true;
      buttonminus.disabled = false;
    } else {
      buttonplus.disabled = false;
      buttonminus.disabled = false;
    }
  }
}

function changevalueplus() {
  text.value++;
  verify();
}
function changevalueminus() {
  text.value--;
  verify();
}
