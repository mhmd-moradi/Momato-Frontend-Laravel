if(window.localStorage.getItem("id")==-1){
    console.log("checked")
    window.location.href = "../index.html";
}

window.onload = function () {
    let signout = document.getElementById("signout");
    signout.addEventListener("click",function(){
        window.localStorage.clear()
        window.localStorage.setItem("id",-1)
    });

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    var error = document.getElementById("error");

    
}
