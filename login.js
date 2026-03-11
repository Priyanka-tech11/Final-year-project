const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");
const form = document.getElementById("loginForm");
const message = document.getElementById("loginMessage");

toggle.onclick = function(){

if(password.type === "password"){
password.type = "text";
toggle.innerHTML = "..";
}
else{
password.type = "password";
toggle.innerHTML = "👁";
}

}

form.addEventListener("submit", function(e){

e.preventDefault();

const btn = document.querySelector(".login-btn");

btn.innerHTML = "Logging in...";
btn.style.opacity = "0.7";

setTimeout(()=>{

message.innerHTML = "✅ Login successful!";
message.style.color = "green";

btn.innerHTML = "Login";
btn.style.opacity = "1";

},1500);

});