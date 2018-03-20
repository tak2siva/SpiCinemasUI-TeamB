/**
 * @jest-environment node
 */


import configureStore from 'redux-mock-store'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import fetchMovies from './actions';

var mock = new MockAdapter(axios);
mock.onGet('http://localhost:9090/movies/?movieType=NOW_SHOWING&languages=English,Hindi').reply(200, [
      {"id":1,"name":"Dunkirk","experiences":"good","listingType":"NOW_SHOWING"},
      {"id":2,"name":"Kabali","experiences":"RDX, Dolby Atmos, SUB","listingType":"NOW_SHOWING"}
    ]
);


// Store mock
// Initialize mockstore with empty state

const middlewares = []
const mockStore = configureStore(middlewares)

const initialState = {}
const store = mockStore(initialState)
 
const filter = {
    movieType: 'NOW_SHOWING',
    languages: 'English,Hindi'
};

fetchMovies(filter)
// Test if your store dispatched the expected actions
const actions = store.getActions()
store.subscribe((state) => "Store: " + state);
actions.map(action => console.log(action))

 
// You would import the action from your codebase in a real scenario
// const addTodo = () => ({ type: 'ADD_TODO' })




it('should return some data ', () => {
    

    fectMovies(filter);

    console.log()

    let data = []
    const expected = {
        users: [
          { id: 1, name: 'John Smith' }
        ]
    };
    


    axios.get('/users').then(function(response) {
        data = response.data;
        console.log(data);
        expect(expected).toEqual(data);
    });
}); 




// This sets the mock adapter on the default instance
