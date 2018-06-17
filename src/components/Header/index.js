import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({
  session: state.session,
});
const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
