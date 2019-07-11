import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artist_actions'
import { fetchSongs } from '../../actions/song_actions'
import ArtistShow from './artist_show'

const msp = (state, ownProps) => ({
    artist: state.entities.artists[ownProps.match.params.artistId],
    songs: state.entities.songs
})

const mdp = dispatch => ({
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    fetchSongs: () => dispatch(fetchSongs())
})

export default connect(msp,mdp)(ArtistShow)