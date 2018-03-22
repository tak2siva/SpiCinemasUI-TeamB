import axios from 'axios';

export const CHANGE_MOVIE_LANGUAGE = 'CHANGE_MOVIE_LANGUAGE';
export const FETCH_LANGUAGES = 'FETCH_LANGUAGES';

export function changeMovieLanguages(movieLanguages){
  return {
      type: CHANGE_MOVIE_LANGUAGE,
      languageFilter: movieLanguages
  }
};

const languagesFetched = (languages) => {
  console.log({
    type: FETCH_LANGUAGES,
    languages
  });
  return{
    type: FETCH_LANGUAGES,
    languages
  }
}

export function fetchLanguages(){
    return async (dispatch) => {
        try{
            const languages = await axios.get("http://localhost:9090/languages");
            const languagesData = languages.data.map(language => {
              return {"label": language.name, "value": language.name};
            });  
            dispatch(languagesFetched(languagesData));
        }catch(error){}
      
    }
}
