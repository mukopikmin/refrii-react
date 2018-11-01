import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  session: state.session,
  boxes: state.box.list,
  selectedBoxId: state.box.selectedId,
});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
