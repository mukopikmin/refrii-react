import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  session: state.user.session,
});
const mapDispatchToProps = () => ({ });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
