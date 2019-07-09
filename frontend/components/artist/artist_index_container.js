import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artist_actions'
import ArtistIndex from './artist_index'

const msp = (state, ownProps) => ({
    artists: Object.values(state.entities.artists)
})

const mdp = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists())
})

export default connect(msp,mdp)(ArtistIndex)