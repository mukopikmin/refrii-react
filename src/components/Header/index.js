import { connect } from 'react-redux';
import Header from './Header';
import actions from '../../actions';

const mapStateToProps = state => ({
  session: state.session,
});
const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(actions.signout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
