import { connect } from 'react-redux';
import Header from './Header';
import actions from '../../actions';
import firebase from '../../firebase';

const mapStateToProps = (state, ownProps) => ({
  session: state.session,
  toggleSidebar: ownProps.toggleSidebar,
});
const mapDispatchToProps = dispatch => ({
  signout: () => {
    dispatch(actions.signout());
    firebase.auth().signOut();
  },
  reload: () => {
    dispatch(actions.requestListBox());
    dispatch(actions.requestListFood());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
