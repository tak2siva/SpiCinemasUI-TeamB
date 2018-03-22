import axios from 'axios';
import changeCase from 'change-case';
import slug from 'slug';
import {changeMovieType} from '../filter/movieType/actions'
import {changeMovieLanguages} from '../filter/language/actions'
export const FETCH_MOVIES_PROGRESS = 'FETCH_MOVIES_PROGRESS';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

const fetchMoviesInProgress = {
  type: FETCH_MOVIES_PROGRESS
}

const movieDataFetched = (data) => ({
  type: FETCH_MOVIES_SUCCESS, 
  payload: data
});

const movieDataFetchFailure = {
  type: FETCH_MOVIES_FAILURE,
};

const fetchMovies = (movieFilter) => {
  return async (dispatch) => {
    dispatch(fetchMoviesInProgress);
    dispatch(changeMovieType(movieFilter.movieType))
    dispatch(changeMovieLanguages(movieFilter.selectedLanguages))
    try {
      const movies = await axios.get(createMovieURL(movieFilter));
      const moviesData = movies.data.map(movie => {
        const sluggedData = slug(changeCase.sentenceCase(movie.name), { lower: true });
        movie.name = movie.name.toUpperCase();
        return {...movie, slug: sluggedData}
      });  
      dispatch(movieDataFetched(moviesData))
    } catch(error) {
      dispatch(movieDataFetchFailure)
    }
  }
};

function createMovieURL(movieFilter) {
  let url = 'http://localhost:9090/movies/';
  let movieType = '';
  
  if (movieFilter != null) {
    if(movieFilter.movieType === 'NOW_SHOWING'){
      movieType = 'movieType=NOW_SHOWING';
    } else {
      movieType = 'movieType=COMING_SOON';
    }
    let selectedLanguages = movieFilter.selectedLanguages ? 'languages=' + movieFilter.selectedLanguages || '' : '';

    url = url + '?' + movieType + '&' + selectedLanguages; 
  }
  return url;
}


export default fetchMovies;
