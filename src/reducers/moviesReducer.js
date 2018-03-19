import { FETCH_MOVIES_PROGRESS, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from '../movies/actions'

const moviesReducer = (state = { fetching: false, items: []}, action) => {
  switch(action.type) {
    case FETCH_MOVIES_PROGRESS: 
      return {...state, fetching: true };
    case FETCH_MOVIES_SUCCESS: return {...state, fetching: false, items: action.payload, error: false };
    case FETCH_MOVIES_FAILURE: return {...state, fetching: false, error: true, items: []}
    default: 
      return {...state}
  }
}

export default moviesReducer;