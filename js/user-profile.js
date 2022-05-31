let signout = document.getElementById("signout");

signout.addEventListener("click",function(){

    window.localStorage.clear()
    window.localStorage.setItem("id",-1)
})
