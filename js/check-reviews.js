window.onload = function () {

    const reviews_container = document.getElementById("reviews-container"); 

    function getReviews(){
        axios({
            method: 'get',
            url: 'http://localhost/Momato/Momato-Backend/APIs/get_reviews.php',
        })
        .then(function (response) {
            let res = response["data"];
            for(let i=0; i < res.length; i++){
                console.log(res[i].username);
                createReview(res[i].review_id, res[i].username, res[i].description)
            }
        });
    }

    function createReview(review_id, usern, reviewtext){
        let userdiv = document.createElement('div');
        userdiv.setAttribute("class", "user-div");

        let pic_name = document.createElement('div');
        pic_name.setAttribute("class", "pic-name");

        let username = document.createElement('span');
        username.setAttribute("id", "username");
        username.setAttribute("class", "username");
        username.innerHTML = usern;

        let review = document.createElement('p');
        review.setAttribute("id", "review");
        review.innerHTML = reviewtext;

        let icons = document.createElement('div');
        icons.setAttribute("class", "icons");
        
        let accept = document.createElement('i');
        accept.setAttribute("class", "fa-solid fa-check check");
        accept.setAttribute("id", review_id);

        let decline = document.createElement('i');
        decline.setAttribute("class", "fa-solid fa-xmark cross");
        decline.setAttribute("id", review_id);

        pic_name.appendChild(username);
        icons.appendChild(accept);
        icons.appendChild(decline);
        userdiv.appendChild(pic_name);
        userdiv.appendChild(review);
        userdiv.appendChild(icons);

        reviews_container.appendChild(userdiv);
    }

    getReviews();
}