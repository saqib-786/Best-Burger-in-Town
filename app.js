let facebook = document.querySelector('#facebook');
let instagram = document.querySelector('#instagram');
let twitter = document.querySelector('#twitter');

// changing social icon on hover

function facebookChangeIcon(){
facebook.src = './Images/facebook.png';
}

function facebookRemoveIcon(){
    facebook.src = './Images/facebook-3-24.png';

}

function instagramChangeIcon(){
    instagram.src = './Images/instagram.png';
}

function instagramRemoveIcon(){
    instagram.src = './Images/instagram-3-24.png';
}

function twitterChangeIcon(){
    twitter.src = './Images/twitter.png';
}

function twitterRemoveIcon(){
    twitter.src = './Images/twitter-3-24.png';
}