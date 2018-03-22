/**
 * @jest-environment node
 */

import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import fetchMovies from "./actions";
import configureMockStore from 'redux-mock-store';
import axios from 'axios';

describe("test fetch action", () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const mock = new MockAdapter(axios);
    let store;

    beforeEach(() => {
        store = mockStore({});
    });

    const mockResponse = [{id: 1, name: "Kabali", experiences: "RDX, Dolby Atmos, SUB", listingType: "NOW_SHOWING"}];

    it("when server responds with success", async () => {
        
        mock.onGet('http://localhost:9090/movies/?movieType=NOW_SHOWING&languages=English,Hindi').reply(200, mockResponse);
        const expectedResponse = mockResponse.map(element => {
            element.name = element.name.toUpperCase();
            return {...element, slug: 'kabali'}
        });

        store.dispatch(fetchMovies({movieType: 'NOW_SHOWING', selectedLanguages: 'English,Hindi'}))
            .then(() => {
                const expectedActions = store.getActions();
                expect(expectedActions.length).toBe(4);
                expect(expectedActions).toContainEqual({"type": "FETCH_MOVIES_PROGRESS"});
                 expect(expectedActions).toContainEqual({"type": "CHANGE_MOVIE_TYPE", movieType: "NOW_SHOWING"});
                 expect(expectedActions).toContainEqual({"type": "CHANGE_MOVIE_LANGUAGE", languageFilter: 'English,Hindi'});
                expect(expectedActions).toContainEqual({"type": "FETCH_MOVIES_SUCCESS", payload: expectedResponse});
            });
    });

    it("when server responds with Error", async () => {
        mock.onGet('http://localhost:9090/movies/?movieType=NOW_SHOWING&languages=English,Hindi').reply(404);

        store.dispatch(fetchMovies({movieType: 'NOW_SHOWING', selectedLanguages: 'English,Hindi'}))
            .then(() => {
                const expectedActions = store.getActions();
                expect(expectedActions.length).toBe(4);
                expect(expectedActions).toContainEqual({"type": "FETCH_MOVIES_PROGRESS"});
                expect(expectedActions).toContainEqual({"type": "CHANGE_MOVIE_TYPE", movieType: "NOW_SHOWING"});
                expect(expectedActions).toContainEqual({"type": "CHANGE_MOVIE_LANGUAGE", languageFilter:'English,Hindi'});
                expect(expectedActions).toContainEqual({"type": "FETCH_MOVIES_FAILURE"});
            });
    });

});