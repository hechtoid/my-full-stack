import * as APIUtil from '../util/artist_api_util'

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';

export const RECEIVE_ARTISTS_ERRORS = 'RECEIVE_ARTISTS_ERRORS';



export const receiveArtists = artists => ({
    type: RECEIVE_ARTISTS,
    artists
});

export const receiveArtist = artist => ({
    type: RECEIVE_ARTIST,
    artist
});

export const receiveArtistsErrors = errors => ({
    type: RECEIVE_ARTISTS_ERRORS,
    errors
});

export const fetchArtists = () => dispatch => (
    APIUtil.fetchArtists().then(artists => (
        dispatch(receiveArtists(artists))
    ))
);

export const fetchArtist = id => dispatch => (
    APIUtil.fetchArtist(id).then(payload => (
        dispatch(receiveArtist(payload))
    ))
);

export const addArtist = (artist) => dispatch => (
         APIUtil.addArtist(artist).then(artist => (
            dispatch(receiveArtist(artist))
         ), err => (
             dispatch(receiveArtistsErrors(err.responseJSON))
         ))
);
