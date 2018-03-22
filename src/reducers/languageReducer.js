import {FETCH_LANGUAGES} from '../app/filter/actions'
export default function languageReducer(state = [], action) {
    switch(action.type) {
        case FETCH_LANGUAGES:
            return action.languages
        default:
            return state;
    }
}