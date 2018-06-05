import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = state => ({
  credential: state.credential,
});
const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
