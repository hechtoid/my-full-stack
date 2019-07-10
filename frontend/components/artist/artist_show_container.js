import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artist_actions'
import ArtistShow from './artist_show'

const msp = (state, ownProps) => ({
    artist: 'sdfsdfsssdfd'
    // [ownProps.match.params.artistId]
})

const mdp = dispatch => ({
    fetchArtist: (id) => dispatch(fetchArtist(id))
})

export default connect(msp,mdp)(ArtistShow)