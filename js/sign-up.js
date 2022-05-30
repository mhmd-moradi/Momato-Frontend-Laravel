window.onload = function () {
    let button = document.getElementById("btn-sign-up");
    button.addEventListener("click", function(event){
    event.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    const c_password = document.getElementById("c_pass").value;
    const username= document.getElementById("username").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    if( password!== c_password){
        alert("Passwords don't match");
    }

    let data = new FormData();
    data.append('username', username);
    data.append('password', password);
    data.append('email', email);
    data.append('fname', fname);
    data.append('lname', lname);
    data.append('gender', gender);
    axios({
        method: 'post',
        url: 'http://localhost/Momato/Momato-Backend/APIs/add_user.php',
        data: data,
    })
    .then(function (response) {
        console.log(response["data"]["id"]);
        if(response.data.user_id == -1){
            alert("Sign up failed!");
        }else{
            window.localStorage.setItem("id",response.data.user_id);
            window.location.href = "display-restaurants.html";
        }
        }
    );
});
}