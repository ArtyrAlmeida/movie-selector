let valorInput = document.getElementById("movieInput");
let addButton = document.getElementById("addButton");
let sortButton = document.getElementById("sort");
let changeButton = document.getElementById("changeMovies");
let initialPage = document.getElementById("initialMain");
let resultPage = document.getElementById("resultMain");
let result = document.getElementById("result");
let movies = new Array();

addButton.addEventListener("click", addMovie);
sortButton.addEventListener("click", sortMovie);
changeButton.addEventListener("click", changeMovies);

function addMovie(){
    movies.push(valorInput.value);
    valorInput.value="Insira um filme";
}

function showMovie(){
    
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