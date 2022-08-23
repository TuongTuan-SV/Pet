var login = document.getElementById("Login");
var btnlogin = document.getElementById("Login1");
var closeLogin = document.getElementsByClassName("closelogin")[0];

btnlogin.onclick = function () {
    login.style.display = "block";
   }
   closeLogin.onclick = function () {
    login.style.display = "none";
   }