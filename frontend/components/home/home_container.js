import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artist_actions'
import Home from './home'

const msp = (state, ownProps) => ({
    artists: Object.values(state.entities.artists)
})

const mdp = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists())
})

export default connect(msp, mdp)(Home)