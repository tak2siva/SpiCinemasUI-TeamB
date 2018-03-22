import languageReducer from './languageReducer';
import { FETCH_LANGUAGES } from './actions';

it('should return empty languages when action is not FETCH_LANGUAGES', () => {
   const action = {type: "UNKNOWN_ACTION"} 
   expect(languageReducer([], action)).toEqual([]);
});

it('should return language list when action is FETCH_LANGUAGES', () => {
    const languageResult = [{'name': 'English', 'id': 1},{'name': 'Hindi', 'id': 2}];
    const action = {type: FETCH_LANGUAGES, languages: languageResult} 
    expect(languageReducer([], action)).toEqual(languageResult);
});