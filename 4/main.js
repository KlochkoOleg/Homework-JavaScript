function ucFirst(str){
    return console.log(str = str[0].toUpperCase() + str.slice(1).toLowerCase());
}
(()=>{let str = prompt("Введите имя:");ucFirst(str)})();