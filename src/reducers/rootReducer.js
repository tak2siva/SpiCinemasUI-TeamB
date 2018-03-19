import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import moviesReducer from './moviesReducer';
import movieFilterReducer from './movieFilterReducer';

const rootReducer = combineReducers({
  movieFilter : movieFilterReducer,
  movies: moviesReducer,
  routing: routerReducer,
});

export default rootReducer;