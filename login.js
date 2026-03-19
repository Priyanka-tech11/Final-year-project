document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.querySelector("input[type='email']").value;
    let password = document.querySelector("input[type='password']").value;

    fetch("http://localhost:8080/auth/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,password})
    })
    .then(res=>res.json())
    .then(data=>{
        if(data){
            localStorage.setItem("userId",data.id);
            window.location.href="dashboard.html";
        }else{
            document.getElementById("loginMessage").innerText="Invalid Login";
        }
    });
});