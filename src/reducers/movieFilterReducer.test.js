import movieFilterReducer from './movieFilterReducer';
import { COMING_SOON, CHANGE_MOVIE_TYPE } from '../movieType/movieTypeActions';
import { CHANGE_MOVIE_LANGUAGE } from '../app/filter/actions';

it('should return the same state if the action-type is unknown', () => {
   const state = {movieType: 'NOW_SHOWING', languages: 'English'};
   const action = {type: "UNKNOWN_ACTION"} 
   const expectedResult = {movieType: 'NOW_SHOWING', languages: 'English'};
   expect(movieFilterReducer(state, action)).toEqual(expectedResult);
});

it('should update the movie-type when action is CHANGE_MOVIE_TYPE', () => {
    const state = {movieType: 'NOW_SHOWING', languages: 'English'};
    const action = {type: CHANGE_MOVIE_TYPE, movieType: COMING_SOON} 
    const expectedResult = {movieType: COMING_SOON, languages: 'English'};
    expect(movieFilterReducer(state, action)).toEqual(expectedResult);
});

 
it('should update the movie-language when action is CHANGE_MOVIE_LANGUAGE', () => {
     const state = {movieType: 'NOW_SHOWING', languages: 'English'};
     const action = {type: CHANGE_MOVIE_LANGUAGE, languages: 'Hindi,Tamil'} 
     const expectedResult = {movieType: 'NOW_SHOWING', languages: 'Hindi,Tamil'};
     expect(movieFilterReducer(state, action)).toEqual(expectedResult);
});