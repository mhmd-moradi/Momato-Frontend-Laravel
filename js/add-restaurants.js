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
    let base64String = "";


    image.addEventListener("change", getImage);

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

}