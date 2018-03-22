import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import moviesReducer from './moviesReducer';
import movieFilterReducer from './movieFilterReducer';
import languageReducer from './languageReducer';

const rootReducer = combineReducers({
  movieFilter : movieFilterReducer,
  movies: moviesReducer,
  languages: languageReducer,
  routing: routerReducer,
});

export default rootReducer;