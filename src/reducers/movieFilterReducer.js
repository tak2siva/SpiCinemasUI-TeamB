import { NOW_SHOWING, CHANGE_MOVIE_TYPE } from '../movieType/movieTypeActions';
import {CHANGE_MOVIE_LANGUAGE} from '../app/filter/actions'
export default function movieFilterReducer(state = {movieType: NOW_SHOWING, languages:''}, action) {
    switch(action.type) {
        case CHANGE_MOVIE_TYPE:
            return {...state, movieType: action.movieType };
        case CHANGE_MOVIE_LANGUAGE:
            return {...state, languages: action.languages}
        default:
            return {...state};
    }
}