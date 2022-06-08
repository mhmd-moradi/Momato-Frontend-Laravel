window.onload = function () {
    let button = document.getElementById("btn-sign-in");
    button.addEventListener("click", function(event){
    event.preventDefault();

    const username = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    var error = document.getElementById("error");

    if(username==="" || password===""){
        error.innerText="Please fill all fields"
    }
    else{
    let url = 'http://localhost:8000/api/login';
    fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json, text-plain, */*",
            },
        method: 'post',
        credentials: "same-origin",
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => 
        response.json().then(data => ({
            data: data,
            status: response.status
        })
    )).then(res => {
        console.log(res.data.users);
        if((res.data.users).length == 0){
            error.innerText="Wrong username or password!"
        }else{
            error.innerText="";
            window.localStorage.setItem("id",res.data.users.id);
            if(res.data.is_admin){
                window.location.href = "html/admin-page.html";
            }
            else{
                window.location.href = "html/display-restaurants.html";
            } 
        }
    })
    .catch(function(error) {
        console.log(error);
    });

    }
});
}