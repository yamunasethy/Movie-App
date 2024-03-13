'use strict';

const api_key='222b10fa2a4df7b3eb1a715795c45302';
const imageBaseURL='https://image.tmdb.org/t/p/';

// fetch data from a server using the url


const fetchDataFromServer= function (url,callback,
    optionalParam) {
    fetch(url).then(response=>response.json()).then(data=>callback(data,optionalParam));
}

export {imageBaseURL, api_key, fetchDataFromServer};


