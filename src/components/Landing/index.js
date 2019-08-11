import { connect } from 'react-redux';
import Landing from './Landing';
import actions from '../../actions';
import firebase from '../../firebase';

const mapStateToProps = state => ({
  session: state.user.session,
});
const mapDispatchToProps = dispatch => ({
  signin: () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider);
  },
  watchAuthState: () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        return;
      }

      dispatch(actions.receiveFirebaseAuthSession(user));
      dispatch(actions.requestVerifySession(user.ra));
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Landing);
