if(window.localStorage.getItem("id")==-1){
    console.log("checked")
    window.location.href = "../index.html";
}
window.onload = function () {

    const image = document.getElementById("inputTag");
    const name = document.getElementById("name");
    const location = document.getElementById("location");
    const category = document.getElementById("category");
    const opening = document.getElementById("opening");
    const opening_daytime = document.getElementById("opening-daytime");
    const closing = document.getElementById("closing");
    const closing_daytime = document.getElementById("closing-daytime");
    const addBtn = document.getElementById("addBtn");
    var result = document.getElementById("result");
    let base64String = "";

    addBtn.addEventListener("click", addRestaurant);

    image.addEventListener("change", getImage);

    function addRestaurant() {
        if (checkFields()){
            insertRestaurant();
        }else
            result.innerText= "Please fill all feilds";   
    }

    function checkFields() {
        console.log(image.files.length);
        console.log(name.value);
        console.log(location.value);
        if (image.files.length != 0 && name.value != "" && location.value != "")
            return true;
        return false;
    }
    
    function getImage() {
        var file = document.querySelector('input[type=file]')['files'][0];
        var reader = new FileReader();
        console.log("next");         
        reader.onload = function () {
            base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
            imageBase64Stringsep = base64String;
            console.log(base64String);
        }
        reader.readAsDataURL(file);
    }

    function insertRestaurant(){
        let data = new FormData();
        data.append('image', base64String);
        data.append('name', name.value);
        data.append('location', location.value);
        data.append('category', category.value);
        data.append('opening_time', opening.value + " " + opening_daytime.value);
        data.append('closing_time', closing.value + " " + closing_daytime.value);
        data.append('user', localStorage.getItem("id"));
        axios({
            method: 'post',
            url: 'http://localhost/Momato/Momato-Backend/APIs/add_restaurant.php',
            data: data,
        })
        .then(function (response) {
            let restaurant_id = response.data.restaurant_id;
            console.log(restaurant_id);
            if(restaurant_id == -1){
                result.innerText="Couldn't add restaurant!";
            }
            else{
                result.style.color="rgb(17, 149, 17)"
                result.innerText="Restaurant Added Successfully!";
                setTimeout(hideElement, 2000)
                function hideElement() {
                result.innerText=""}
                window.location.reload();
            }
        });
    }
}