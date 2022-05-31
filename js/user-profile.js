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

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const password = document.getElementById("pass");
    const gender = document.querySelector('input[name="gender"]:checked');
    var error = document.getElementById("error");

    let data = new FormData();
    data.append('user_id', window.localStorage.getItem("id"));
    axios({
        method: 'post',
        url: 'http://localhost/Momato/Momato-Backend/APIs/get_users.php',
        data: data,
    })
    .then(function (response) {
        console.log(response.data)
        fname.
        }
    );
}

