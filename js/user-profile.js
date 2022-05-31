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
}
