import { NOW_SHOWING, CHANGE_MOVIE_TYPE } from './movieType/actions';
import {CHANGE_MOVIE_LANGUAGE} from './language/actions'
export default function movieFilterReducer(state = {movieType: NOW_SHOWING, selectedLanguages:''}, action) {
    switch(action.type) {
        case CHANGE_MOVIE_TYPE:
            return {...state, movieType: action.movieType };
        case CHANGE_MOVIE_LANGUAGE:
            return {...state, selectedLanguages: action.languageFilter}
        default:
            return {...state};
    }
}