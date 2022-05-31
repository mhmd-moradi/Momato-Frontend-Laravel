window.onload = function () {

    if(window.localStorage.getItem("id")==-1){
        console.log("checked")
        window.location.href = "../index.html";
    }

    const users_container = document.getElementById("users-container");

    function getUsers(){
        axios({
            method: 'get',
            url: 'http://localhost/Momato/Momato-Backend/APIs/get_users.php',
        })
        .then(function (response) {
            for(let i=0; i < response["data"].length; i++){
                createUser(response["data"][i].username, response["data"][i].gender, response["data"][i].email);
            }
        });
    }

    getUsers();

}