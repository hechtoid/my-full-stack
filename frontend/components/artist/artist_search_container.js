import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artist_actions'
import ArtistSearch from './artist_search'

const msp = (state, ownProps) => ({
    artists: Object.values(state.entities.artists)
})

const mdp = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists())
})

export default connect(msp,mdp)(ArtistSearch)