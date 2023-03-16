  let login = prompt("Login", "");
  let password = prompt("Password", "");
  if(login == "oleg" && password =="1234" ){
      alert("Привет");
  }else if(login == "oleg" && password !="1234"){
    alert("Неправильный пароль");
  }else if(login != "oleg" && password =="1234"){
    alert("Неправильный логин");
  }else if(login == "" && password =="")
  alert("Ошибка Валидации");
      