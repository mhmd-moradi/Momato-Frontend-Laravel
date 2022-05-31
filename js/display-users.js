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

    //create user dom
    function createUser(username, gender, email){
        let info = document.createElement('div');
        info.setAttribute("class", "info");

        let userdivmain = document.createElement('div');
        userdivmain.setAttribute("class", "user-div");

        let imagediv = document.createElement('div');
        imagediv.setAttribute("class", "image");

        let image = document.createElement('img');
        image.setAttribute("src", "../assets/images/user4.jpg");
        image.setAttribute("class", "user-profile");
        image.setAttribute("id", "profile");

        //username section
        let userdiv = document.createElement('div');
        userdiv.setAttribute("class", "userDiv");

        let label_username = document.createElement('label');
        label_username.innerHTML = "Username:"

        let userd = document.createElement('div');
        userd.setAttribute("class", "userd");

        let usernametext = document.createElement('span');
        usernametext.setAttribute("class", "username");
        usernametext.setAttribute("id", "username");
        usernametext.innerHTML = username;

        //gender section
        let genderdiv = document.createElement('div');
        userdiv.setAttribute("class", "genderDiv");

        let label_gender = document.createElement('label');
        label_gender.setAttribute("class", "genderl");
        label_gender.innerHTML = "Gender:"

        let genderd = document.createElement('div');
        genderd.setAttribute("class", "genderd");

        let gendertext = document.createElement('span');
        gendertext.setAttribute("class", "Gender");
        gendertext.setAttribute("id", "gender");
        gendertext.innerHTML = gender;

        //email section
        let emaildiv = document.createElement('div');
        userdiv.setAttribute("class", "emailDiv");

        let label_email = document.createElement('label');
        label_email.setAttribute("class", "emaill");
        label_email.innerHTML = "Email:"

        let emaild = document.createElement('div');
        genderd.setAttribute("class", "emaild");

        let emailtext = document.createElement('span');
        emailtext.setAttribute("class", "Email");
        emailtext.setAttribute("id", "email");
        emailtext.innerHTML = email;
        
        userdiv.appendChild(label_username);
        userd.appendChild(usernametext);
        userdiv.appendChild(userd);
        info.appendChild(userdiv);

        genderdiv.appendChild(label_gender);
        genderd.appendChild(gendertext);
        genderdiv.appendChild(genderd);
        info.appendChild(genderdiv);

        emaildiv.appendChild(label_email);
        emaild.appendChild(emailtext);
        emaildiv.appendChild(emaild);
        info.appendChild(emaildiv);

        imagediv.appendChild(image);
        userdivmain.appendChild(imagediv);
        userdivmain.appendChild(info);
        users_container.appendChild(userdivmain);
    }

    getUsers();

}