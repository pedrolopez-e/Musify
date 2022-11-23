$('.btn_card').click((event) => {

    let url = 'https://pedrolopez-e.github.io/Musify/profile1.html?=';
    if ($(event.target).attr('class') == "btn_card spinetta") {
        url = url + "0";
    } else if ($(event.target).attr('class') == "btn_card wos") {
        url = url + "1";
    } else {
        url = url + "2";
    }
    window.location = url;
   return false;
});