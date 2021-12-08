const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько его оцениваете? ', '');
//     if (a !== '' && a !== null && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
// }

let index = 0;

while (index < 2) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько его оцениваете? ', '');
    if (a !== '' && a !== null && a.length < 50) {
        personalMovieDB.movies[a] = b;
        index ++
    } else {
        index--;
    }
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}