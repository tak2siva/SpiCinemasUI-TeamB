import { NOW_SHOWING, CHANGE_MOVIE_TYPE } from '../movieType/movieTypeActions';

export default function movieFilterReducer(state = {}, action) {
    switch(action.type) {
        case CHANGE_MOVIE_TYPE:
            return {...state, movieType: action.movieType };
        default:
            return {...state, movieType: NOW_SHOWING};
    }
}