/*
* Written by: https://github.com/Razpudding
* To be used as educational examples for hackyourfuture.net and hva.nl
* Possible ways to expand on this example:
* - Provide user feedback when no results are returned
* - Limit the user input to one word
* - Read the API documentation and search only for series or episodes: http://www.omdbapi.com/
* - Show the posters of each movie
* - Extend the app so it searched for one movie and one wikipedia article based on the user's input
*/
//Note: The API this example uses is going private :( https://www.patreon.com/posts/api-is-going-10743518
//As a result, it might not work in the near future. A good alternative is the wikipedia API
"use strict";
//Set up global vars
var resultEl = document.querySelector("#resultEl"); //this is slower than getElementById
var btnEl = document.getElementById("searchBtn");
var loaderEl = document.getElementById("resultLoader");

btnEl.addEventListener("click", getUserInput);

//User input gathers the value from the input field and calls loadMovies
function getUserInput(event){
  //Note: we don't need to save the user input to a variable and could just do loadMovies(document.getElementById("user-input-field").value);
  var userInput = document.getElementById("user-input-field").value;
  console.log("User typed in: " + userInput);
  loadMovies(userInput); 
}

//This function will request a list of movies with the word "searchTerm" in the title from the open movie database
function loadMovies(searchTerm){
  //console.log(loaderEl);
  loaderEl.classList.toggle("invisible");
  //console.log("retrieving movie data request");
  var requestURL = 'http://www.omdbapi.com/?s='+searchTerm+"&apikey=f1869fdc";
  var results = [];
  //Build an XHR request and then send it.
  //If you want a more structured approach, write an XHR constructor and call it here
  //Read this for more info: https://www.kirupa.com/html5/making_http_requests_js.htm
  var xhr = new XMLHttpRequest();
  xhr.open('GET', requestURL, true);
  xhr.send();
  xhr.onreadystatechange = processRequest;
  
  //This function keeps track of changes to the xhr request
  function processRequest() {
    console.log(xhr.readyState);
    if (xhr.readyState == XMLHttpRequest.DONE){
      console.log("xhr request DONE SON");
      //console.log(xhr.response);
      //The result of the XHR will be a string that we need to turn into JSON
      var result = JSON.parse(xhr.response);
      results = result.Search;
      console.table(results);
      renderDOM(results);
    }
    //TODO: add error handling
  }
}
//This function wil render the ovie information once it has been loaded
function renderDOM(movieInfo){
  loaderEl.classList.toggle("invisible");
  console.log("Rendering movie results");
  var article = document.querySelector("article");
  article.innerHTML = "";
  movieInfo.forEach(function(movie){
    var section = document.createElement('section');
    var title = document.createElement('h2');
    var span = document.createElement('span');
    title.innerHTML = movie.Title;
    span.innerHTML = movie.Year;
    section.appendChild(title);
    section.appendChild(span);
    article.appendChild(section);
  });
}