import { connect } from 'react-redux';
import Header from './Header';
import actions from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  session: state.session,
  toggleDrawer: ownProps.toggle,
  drawerOpen: ownProps.drawerOpen,
});
const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(actions.signout()),
  reload: () => {
    dispatch(actions.requestListBox());
    dispatch(actions.requestListFood());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
