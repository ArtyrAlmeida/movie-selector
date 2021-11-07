let valorInput = document.getElementById("movieInput");
let addButton = document.getElementById("addButton");
let sortButton = document.getElementById("sort");
let changeButton = document.getElementById("changeMovies");
let initialPage = document.getElementById("initialMain");
let resultPage = document.getElementById("resultMain");
let result = document.getElementById("result");
let movies = new Array();

let movie0 = document.getElementById("movie0");
let movie1 = document.getElementById("movie1");
let movie2 = document.getElementById("movie2");
let movie3 = document.getElementById("movie3");
let movie4 = document.getElementById("movie4");
let movie5 = document.getElementById("movie5");
let movie6 = document.getElementById("movie6");

let movieDisplays = new Array(movie0, movie1, movie2, movie3, movie4, movie5, movie6);

addButton.addEventListener("click", addMovie);
sortButton.addEventListener("click", sortMovie);
changeButton.addEventListener("click", changeMovies);

function addMovie(){
    if(movies.length<=6){
        movies.push(valorInput.value);
        valorInput.value="Insira um filme";
    }
    else{
        valorInput.value="Máximo de filmes atingido";
        valorInput.style.color="red"; 
    }

    showMovie();
}

function removeMovie(i){
    movies.splice(i, 1);

    showMovie();

    valorInput.value="Insira um filme";
    valorInput.style.color="white"; 
}

function showMovie(){
    let i;

    for(i=0;i<movieDisplays.length;i++){
        movieDisplays[i].innerHTML=" ";

    }

    for(i=0;i<movies.length;i++){
        movieDisplays[i].innerHTML=movies[i];
    }
}

function sortMovie(){
    let length = movies.length;
    let index = Math.floor(Math.random()*length);

    showResult(movies, index);
}

function showResult(movies, index){
    initialPage.style.display="none";
    resultPage.style.display="flex";
    sortButton.innerHTML = "Sortear novamente"

    result.innerHTML = movies[index];
}
function changeMovies(){
    initialPage.style.display="unset";
    resultPage.style.display="none";
}