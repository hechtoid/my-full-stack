import { connect } from 'react-redux';
import { teaseArtists } from '../../actions/artist_actions'
import Home from './home'

const msp = (state, ownProps) => ({
    artists: Object.values(state.entities.artists)
})

const mdp = dispatch => ({
    teaseArtists: () => dispatch(teaseArtists())
})

export default connect(msp, mdp)(Home)