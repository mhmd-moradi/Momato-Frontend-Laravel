window.onload = function () {

    const res_pic = document.getElementById("res-pic");
    const res_name = document.getElementById("res-name");
    const res_location = document.getElementById("location");
    const from = document.getElementById("from");
    const till = document.getElementById("till");
    const send = document.getElementById("send-div"); 
    const review = document.getElementById("new-review"); 
    const restaurant_id = getRestaurantId();

    function getRestaurant(){
        axios({
            method: 'get',
            url: 'http://localhost/Momato/Momato-Backend/APIs/get_restaurant.php?restaurant_id='+restaurant_id,
        })
        .then(function (response) {
            let res = response.data[0];
            updateRestaurantInfo(res.image, res.restaurant_name, res.location, res.opening_time, res.closing_time);
        });
    }

    function getRestaurantId(){
        var url_string = window.location.href;
        var url = new URL(url_string);
        return url.searchParams.get("restaurant_id");
    }

}