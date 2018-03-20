import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from '../movies/reducer';
import movieFilter from './filter/reducer';

const rootReducer = combineReducers({
  movies,
  movieFilter,
  routing: routerReducer,
});

export default rootReducer;