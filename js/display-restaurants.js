if(window.localStorage.getItem("id")==-1){
    console.log("checked")
    window.location.href = "../index.html";
}
window.onload = function () {

    

    function getRestaurants(){
        let url = 'http://localhost:8000/api/get_restaurants';
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text-plain, */*",
                },
            method: 'get',
            credentials: "same-origin",
        })
        .then(response => 
            response.json().then(data => ({
                data: data,
                status: response.status
            })
        )).then(res => {
            console.log(res.data);
            for(let i=0; i < res.data.restaurants.length; i++){
                //console.log(res.data.restaurants[i].image);
                createRestaurant(res.data.restaurants[i].id, res.data.restaurants[i].image, res.data.restaurants[i].restaurant_name, "4.3", res.data.restaurants[i].location);
            }

            //restaurant onclick
            const restaurants = document.getElementsByClassName("restaurant");
            for(let i=0; i < restaurants.length; i++){
                restaurants[i].addEventListener("click", function(){
                    window.location.href = "restaurant.html?restaurant_id="+ this.id;
                })
            }
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    //create restaurant dom
    function createRestaurant(id, image, name, rate, loc){
        let rest = document.createElement('div');
        rest.setAttribute("id", id);
        rest.setAttribute("class", "restaurant");

        let rest_info = document.createElement('div');
        rest_info.setAttribute("class", "restaurant-info");

        let rest_image = document.createElement('img');
        rest_image.src = "data:image/png;base64,"+image;

        let name_rating = document.createElement('div');
        name_rating.setAttribute("class", "name-rating");

        let rest_name = document.createElement('h3');
        rest_name.setAttribute("class", "rest-name");
        rest_name.innerHTML = name;

        let rating = document.createElement('div');
        rating.setAttribute("class", "rating");
        let rating_text = document.createElement('p');
        rating_text.innerHTML = rate + ' <i class="fa fa-star" aria-hidden="true"></i>';

        let location = document.createElement('h4');
        location.setAttribute("class", "location");
        location.innerHTML = loc;


        
        rating.appendChild(rating_text);
        name_rating.appendChild(rest_name);
        name_rating.appendChild(rating);
        rest_info.appendChild(rest_image);
        rest_info.appendChild(name_rating);
        rest_info.appendChild(location);
        rest.appendChild(rest_info)
        
        let category_restaurants = document.getElementsByClassName("category-restaurants")[0];
        category_restaurants.appendChild(rest);
    }

    getRestaurants();

}