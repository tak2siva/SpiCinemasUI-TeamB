import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import moviesReducer from './movies/moviesReducer';
import movieFilterReducer from './filter/movieFilterReducer';
import languageReducer from './filter/language/languageReducer';

const rootReducer = combineReducers({
  movieFilter : movieFilterReducer,
  movies: moviesReducer,
  languages: languageReducer,
  routing: routerReducer,
});

export default rootReducer;