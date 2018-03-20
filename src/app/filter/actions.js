import axios from 'axios';
import changeCase from 'change-case';
import slug from 'slug';

export const FETCH_MOVIES_PROGRESS = 'FETCH_MOVIES_PROGRESS';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

const fetchMoviesInProgress = {
  type: FETCH_MOVIES_PROGRESS
}

const movieDataFetched = (data) => ({
  type: FETCH_MOVIES_SUCCESS, 
  payload: data,
});

const movieDataFetchFailure = {
  type: FETCH_MOVIES_FAILURE,
};

/*const fetchMovies = () => {
  return async (dispatch) => {
    dispatch(fetchMoviesInProgress);
    try {
      const movies = await axios.get('http://localhost:9090/movies/')
      // const movies = [{
      //   id: 'asfasdfas',
      //   name: 'Kabali',
      //   experience: 'asfasdfag',
      // }]
      const moviesData = movies.data.map(movie => {
        const sluggedData = slug(changeCase.sentenceCase(movie.name), { lower: true });
        return {...movie, slug: sluggedData}
      });  
      dispatch(movieDataFetched(moviesData))
    } catch(error) {
      dispatch(movieDataFetchFailure)
    }
  }
};*/

const fetchMovies = (movieFilter) => {
  console.log('fetchMovies' , movieFilter);
  return async (dispatch) => {
    dispatch(fetchMoviesInProgress);
    try {
      const movies = await axios.get(createMovieURL(movieFilter));
      const moviesData = movies.data.map(movie => {
        const sluggedData = slug(changeCase.sentenceCase(movie.name), { lower: true });
        return {...movie, slug: sluggedData}
      });  
      dispatch(movieDataFetched(moviesData))
    } catch(error) {
      dispatch(movieDataFetchFailure)
    }
  }
};

function createMovieURL(movieFilter) {
  console.log(movieFilter);
  let url = 'http://localhost:9090/movies/';
  let movieType = '';
  
  if (movieFilter != null) {
    if(movieFilter.movieType === 'NOW_SHOWING'){
      movieType = 'movieType=NOW_SHOWING';
    } else {
      movieType = 'movieType=COMING_SOON';
    }
    let languages = movieFilter.languages ? 'languages=' + movieFilter.languages || '' : '';

    url = url + '?' + movieType + '&' + languages; 
    console.log("url " + url);
  }
  console.log("url " + url);
  return url;
}


export default fetchMovies;
