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
    const username = document.getElementById("username");
    var error = document.getElementById("error");

    let data = new FormData();
    data.append('user_id', window.localStorage.getItem("id"));
    axios({
        method: 'post',
        url: 'http://localhost/Momato/Momato-Backend/APIs/get_users.php',
        data: data,
    })
    .then(function (response) {
        fname.setAttribute("value",response.data[0].first_name);
        lname.setAttribute("value",response.data[0].last_name);
        email.setAttribute("value",response.data[0].email);
        username.setAttribute("value",response.data[0].username);
        }
    );

    let button = document.getElementById("btn-edit");
    button.addEventListener("click", function(event){
        let data = new FormData();
        data.append('email', email);
        data.append('fname', fname);
        data.append('lname', lname);
        axios({
            method: 'post',
            url: 'http://localhost/Momato/Momato-Backend/APIs/add_user.php',
            data: data,
        })
        .then(function (response) {
            console.log(response.data.user_id);
        });
    });
}

