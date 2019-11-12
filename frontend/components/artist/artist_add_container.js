import { connect } from 'react-redux';
import { addArtist } from '../../actions/artist_actions';
import ArtistAdd from './artist_add'

const msp = (state, ownProps) => {
    return {
        errors: state.errors.artists,
    }
}

const mdp = dispatch => ({
    addArtist: artist => dispatch(addArtist(artist))
});

export default connect(msp, mdp)(ArtistAdd);