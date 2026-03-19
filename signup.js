document.getElementById("signupForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.querySelector("input[type='text']").value;
    let email = document.querySelector("input[type='email']").value;
    let password = document.getElementById("password").value;

    fetch("http://localhost:8080/auth/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,email,password})
    })
    .then(res=>res.json())
    .then(()=>{
        document.getElementById("signupMessage").innerText="Account Created!";
        setTimeout(()=>window.location.href="login.html",1500);
    });
});