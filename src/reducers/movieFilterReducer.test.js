import movieFilterReducer from './movieFilterReducer';
import { COMING_SOON, CHANGE_MOVIE_TYPE } from '../movieType/movieTypeActions';

it('renders NOW_SHOWING movie type when action type is not present', () => {
   var result = movieFilterReducer({}, {});
   expect({movieType: 'NOW_SHOWING'}).toEqual(result);
});

it('renders movie type which is passed in the state when action is CHANGE_MOVIE_TYPE', () => {
    var result = movieFilterReducer({}, 
        {type: CHANGE_MOVIE_TYPE, movieType: COMING_SOON});
    expect({movieType: 'COMING_SOON'}).toEqual(result);
 });