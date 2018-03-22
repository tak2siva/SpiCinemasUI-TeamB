/**
 * @jest-environment node
 */

import thunk from 'redux-thunk';
import applyMiddleware from 'redux';
import MockAdapter from 'axios-mock-adapter';
import { fetchLanguages } from "./actions";
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import { FETCH_LANGUAGES } from './actions';

describe("test fetch action", () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const mock = new MockAdapter(axios);
    let store;

    beforeEach(() => {
        store = mockStore({});
    });

    const mockResponse = [{"id":1,"name":"English"},{"id":2,"name":"Hindi"}];

    it("when server responds with success", async () => {
        const expectedResponse = [{"label": "English", "value": "English"},
                                    {"label": "Hindi", "value": "Hindi"}];
        mock.onGet('http://localhost:9090/languages').reply(200, mockResponse);

        store.dispatch(fetchLanguages())
            .then(() => {
                const expectedActions = store.getActions();
                expect(expectedActions.length).toBe(1);
                expect(expectedActions).toContainEqual({"type": FETCH_LANGUAGES, languages: expectedResponse});
            });
    });

    it("when server responds with Error", async () => {
        mock.onGet('http://localhost:9090/languages').reply(404);

        store.dispatch(fetchLanguages())
            .then(() => {
                const expectedActions = store.getActions();
                expect(expectedActions.length).toBe(0);
            });
    });

});