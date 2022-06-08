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
        let url = 'http://localhost:8000/api/add_restaurant';
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text-plain, */*",
                },
            method: 'post',
            credentials: "same-origin",
            body: JSON.stringify({
                image: base64String,
                name: name.value,
                location: location.value,
                category: category.value,
                opening_time: opening.value + " " + opening_daytime.value,
                closing_time: closing.value + " " + closing_daytime.value,
                user: localStorage.getItem("id"),
            })
        })
        .then(response => 
            response.json().then(data => ({
                data: data,
                status: response.status
            })
        )).then(res => {
            console.log(res.data);
            let restaurant_id = res.data.restaurant_id;
            console.log(restaurant_id);
            if(restaurant_id <= 0){
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
        })
        .catch(function(error) {
            console.log(error);
        });
    }
}