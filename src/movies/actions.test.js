import thunk from 'redux-thunk';
import applyMiddleware from 'redux';
import MockAdapter from 'axios-mock-adapter';
import fetchMovies from "../movies/actions";
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
        mock.onGet('http://localhost:9090/movies/now-showing').reply(200, mockResponse);
        const expectedResponse = mockResponse.map(element => {
            return {...element, slug: 'kabali'}
        });

        store.dispatch(fetchMovies({movieType: 'NOW_SHOWING'}))
            .then(() => {
                const expectedActions = store.getActions();
                expect(expectedActions.length).toBe(2);
                expect(expectedActions).toContainEqual({"type": "FETCH_MOVIES_PROGRESS"});
                expect(expectedActions).toContainEqual({"type": "FETCH_MOVIES_SUCCESS", payload: expectedResponse});
            });
    });

    it("when server responds with Error", async () => {
        mock.onGet('http://localhost:9090/movies/now-showing').reply(404);

        store.dispatch(fetchMovies({movieType: 'NOW_SHOWING'}))
            .then(() => {
                const expectedActions = store.getActions();
                expect(expectedActions.length).toBe(2);
                expect(expectedActions).toContainEqual({"type": "FETCH_MOVIES_PROGRESS"});
                expect(expectedActions).toContainEqual({"type": "FETCH_MOVIES_FAILURE"});
            });
    });

});