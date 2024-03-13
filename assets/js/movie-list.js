'use strict';

import { api_key, fetchDataFromServer } from "./api.js";
import { sidebar } from "./sidebar.js";
import { createMovieCard } from "./movie-card.js";
import { search } from "./search.js";

//collects genre name $ url parameter from local sotrage
const genreName=window.localStorage.getItem("genreName");
const urlParam=window.localStorage.getItem("urlParam");
//const pageContent=document.querySelector("[page-content]");
const pageContent=document.querySelector("[page-content]");



sidebar();

let currentPage=1;
let totalPages=0;
const fetchURL=`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&include_adult=false&page=${currentPage}&sort_by=popularity.desc&${urlParam}`;

fetchDataFromServer(fetchURL,
function({ results: movieList, total_pages}){
     
    totalPages=total_pages;

    document.title=`${genreName} Moveis - Tvflix`;

    const movieListElem=document.createElement("section");
    movieListElem.classList.add("movie-list","genre-list");

    movieListElem.ariaLabel=`${genreName} Movies`;

    movieListElem.innerHTML=`
    <div class="title-wrapper">
        <h1 class="heading">All ${genreName} Movies</h1>
    </div>

    <div class="grid-list">
         <!-- fetched from moviecard -->
    </div>

    <button class="btn load-more" load-more>Load More</button>

     `;


    /*
     add movie card based on fetched item
    */
     for(const movie of movieList) {
        const movieCard=createMovieCard(movie);

        movieListElem.querySelector(".grid-list").appendChild(movieCard);
     }

     pageContent.appendChild(movieListElem);


     /**
      * load more btn function
      */

     document.querySelector("[load-more]").addEventListener
     ("click", function(){

        if(currentPage>=totalPages){
            this.style.display="none";   //this is load more button
            return;
        }

        currentPage++;
        //fetchURL=`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&include_adult=false&page=${currentPage}&sort_by=popularity.desc&${urlParam}`;

        this.classList.add("loading"); //this is load more button
    
        fetchDataFromServer(fetchURL,({ results: movieList}) => {

            this.classList.remove("loading");

            for(const  movie of movieList){
                const movieCard=createMovieCard(movie);

                movieListElem.querySelector(".grid-list").appendChild(movieCard);
                
            }
        });
    });
});


search();