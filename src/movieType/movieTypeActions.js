export const NOW_SHOWING = 'NOW_SHOWING';
export const COMING_SOON = 'COMING_SOON';
export const CHANGE_MOVIE_TYPE = 'CHANGE_MOVIE_TYPE';

export function changeMovieType(movieType){
    return {
        type: 'CHANGE_MOVIE_TYPE',
        movieType
    }
}