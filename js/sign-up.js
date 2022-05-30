window.onload = function () {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    const c_password = document.getElementById("c_pass").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const username= document.getElementById("username").value;
    let button = document.getElementById("btn-sign-up");
    button.addEventListener("click", signup);
    }