import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  session: state.session,
  boxes: state.box.list,
  box: state.box.target,
});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
