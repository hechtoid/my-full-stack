import React from 'react'
import ReactDOM from 'react-dom'
// import {signup, signin, signout} from './util/session_api_util'
// import { fetchArtists, fetchArtist } from './actions/artist_actions'
// import {signup, signin, signout} from './actions/session_actions'
import configureStore from './store/store'
import Root from './components/root'


document.addEventListener("DOMContentLoaded", () =>{
    const root = document.getElementById("root")
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUser: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    ReactDOM.render(<Root store={store} />, root)
    
    // window.store = store
    // window.signup = signup
    // window.signin = signin
    // window.signout = signout
    // window.fetchArtists = fetchArtists
    // window.fetchArtist = fetchArtist

    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
})