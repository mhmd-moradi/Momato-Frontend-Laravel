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
    var error = document.getElementById("error");

    //Empty fields
    if(fname==""||lname==""||email==""||password==""||c_password==""||username==""){
        error.innerText="Please fill all fields";
    }
    //Passwords don't match
    else if( password!== c_password){
        error.innerText="Passwords don't match";
    }
    else{
        let url = 'http://localhost:8000/api/add_user';
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text-plain, */*",
                },
            method: 'post',
            credentials: "same-origin",
            body: JSON.stringify({
                username: username,
                password: password,
                email: email,
                first_name: fname,
                last_name: lname,
                gender: gender,
            })
        })
        .then(response => 
            response.json().then(data => ({
                data: data,
                status: response.status
            })
        )).then(res => {
            console.log(res.data);
            if(res.data.user_id <= 0){
                alert("Sign up failed!");
            }else{
                window.localStorage.setItem("id",res.data.user_id);
                window.location.href = "display-restaurants.html";
            }
        })
        .catch(function(error) {
            console.log(error);
        });
        
    }
});
}