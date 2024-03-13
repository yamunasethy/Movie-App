'use strict';



// add event on multiple elements

const addEventOnElements = function(elements, eventType, callback){
    for(const elem of elements) elem.addEventListener(eventType,
        callback);
}



// toggle search box in mobile device||small devices

const searchBox=document.querySelector("[search-box]");
const searchTogglers=document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", function(){
    searchBox.classList.toggle("active");
});

/*
* store the movie id when we click any movie
*/

const getMovieDetail=function(movieId) {
    window.localStorage.setItem("movieId",String(movieId));
    //when we click any movie card getMovieDetail get called it will store movieId
    //same in index.js heroBanner->for->sliderItem.innerHTML->
}


const getMovieList=function(urlParam, genreName){
    window.localStorage.setItem("urlParam", urlParam);
    window.localStorage.setItem("genreName",genreName);
    //update where we click lang and genre ->sidebar.js innerhtml
}



