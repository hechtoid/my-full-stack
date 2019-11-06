import { connect } from 'react-redux';
import { addArtist, fetchArtists } from '../../actions/artist_actions';
import ArtistAdd from './artist_add'

const msp = (state, ownProps) => {
    // return {
    //     errors: this.state.errors.artist
    // }
}

const mdp = dispatch => ({
    addArtist: artist => dispatch(addArtist(artist)),
    fetchArtists: () => dispatch(fetchArtists())
});

export default connect(null,mdp)(ArtistAdd)