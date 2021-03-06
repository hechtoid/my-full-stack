import merge from 'lodash/merge'

import {RECEIVE_SONG, RECEIVE_SONGS } from '../actions/song_actions'

const songsReducer = (state ={}, action) => {
    Object.freeze(state)
    switch (action.type){
        case RECEIVE_SONGS:
            return action.songs
        default:
            return state
    }
}

export default songsReducer