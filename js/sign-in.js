window.onload = function () {
    let button = document.getElementById("btn-sign-in");
    button.addEventListener("click", function(event){
    event.preventDefault();

    const username = document.getElementById("email").value;
    const password = document.getElementById("pass").value;

    let data = new FormData();
    data.append('password', password);
    data.append('username', username);
    axios({
        method: 'post',
        url: 'http://localhost/Momato/Momato-Backend/APIs/login.php',
        data: data,
    })
    .then(function (response) {
        console.log(response["data"]["id"]);
        if(response.data.user_id == -1){
            alert("Sign in failed!");
        }else{
            window.localStorage.setItem("id",response.data.user_id);
            if(response.data.is_admin){
                window.location.href = "html/admin-page.html";
            }
            else{
                window.location.href = "html/display-restaurants.html";
            }
                
        }
        }
    );
});
}