function extractCurrencyValue(str){
   if (!isNaN(parseInt(str.slice(1)))){
     console.log(str.slice(1));
  } else console.log("Введено неверное значение")
}
(()=>{let str = prompt("Введите валюту:");extractCurrencyValue(str)})();