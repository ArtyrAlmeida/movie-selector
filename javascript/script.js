let valorInput = document.getElementById("movieInput");
let addButton = document.getElementById("addButton");
let sortButton = document.getElementById("sort");
let movies = new Array();

addButton.addEventListener("click", addMovie);
sortButton.addEventListener("click", sortMovie);

function addMovie(){
    movies.push(valorInput.value);
    //console.log(movies[1]);
}

function sortMovie(){
    let length = movies.length;
    let index = Math.random()*length;
    console.log(movies[index]);
}