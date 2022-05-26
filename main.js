let numberOfFilms = +prompt('Сколько фильмов вы уже посмотели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


const lastViewedFilm1 = prompt('Последний просмотренный фильм', ''),
      lastViewedFilm2 = prompt('Последний просмотренный фильм', ''),
      ratingFilm1 = prompt('На сколько оцените его?', ''),
      ratingFilm2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastViewedFilm1] = ratingFilm1;
personalMovieDB.movies[lastViewedFilm2] = ratingFilm2;

console.log(personalMovieDB);