import merge from 'lodash/merge';

import {
    RECEIVE_ARTIST,
    RECEIVE_ARTISTS
} from '../actions/artist_actions';

const artistsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ARTISTS:
            return action.artists;
        case RECEIVE_ARTIST:
            const newArtist = { [action.artist.id]: action.artist };
            return merge({}, state, newArtist);
        default:
            return state;
    }
};

export default artistsReducer;
