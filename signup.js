function togglePassword(){
let pass=document.getElementById("password")

if(pass.type==="password"){
pass.type="text"
}else{
pass.type="password"
}
}

document.getElementById("signupForm").addEventListener("submit",function(e){

e.preventDefault()

let pass=document.getElementById("password").value
let confirm=document.getElementById("confirmPassword").value
let message=document.getElementById("signupMessage")

if(pass!==confirm){
message.innerHTML="Passwords do not match"
message.style.color="red"
return
}

message.innerHTML="Account created successfully!"
message.style.color="green"

})