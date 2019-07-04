import { connect } from 'react-redux';

import { signout } from '../../actions/session_actions';
import Banner from './banner';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.currentUser]
  };
};

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Banner);
