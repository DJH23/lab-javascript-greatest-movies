const movies = require("./data.js");

// console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.

/*function getAllDirectors(moviesArray) {
  const rawList = moviesArray.map((movie) => movie.director)

  const cleanList = rawList.filter((director, index) => {return rawList.indexOf(director) === index;
  });
  
  return cleanList;
}



console.log(`1. A list of directors of this data is ${getAllDirectors(movies)}`);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//function howManyMovies(moviesArray) {}


const howManyMovies = (moviesArray) => {
  
  const steven = moviesArray.filter(
    (movieItem) => movieItem.director === "Steven Spielberg"
  );

  const dramaMovies = steven.filter((spielberg) => spielberg.genre.includes("Drama")
  );
  return dramaMovies;
}
console.log(howManyMovies(movies))
*/
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const scoreWithManyDecimals = moviesArray.reduce((accumulator, movie) => accumulator + movie.score, 0) / moviesArray.length;   
  const scoreWithTwoDecimals = scoreWithManyDecimals.toFixed(2); 
  return scoreWithTwoDecimals
}
console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMoviesArray = moviesArray.filter((dramaMovies) => dramaMovies.genre.includes("Drama"));
  const dramaMoviesAverage = dramaMoviesArray.reduce((accumulator, dramaMovies) => accumulator + dramaMovies.score, 0) / moviesArray.length;
  return dramaMoviesAverage.toFixed(2)
}
console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray.sort((movie1, movie2) => {
    if (movie1.year < movie2.year) return -1;
    if (movie1.year > movie2.year) return 1;
    if (movie1.year === movie2.year) return 0;
  });
  
}
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray.map((orderedList)=> orderedList.title).sort().slice(0, 20);  
}

console.log(orderAlphabetically(movies));

/*
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. 
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}*/
