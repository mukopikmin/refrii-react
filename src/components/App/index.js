import { connect } from 'react-redux';
import App from './App';
import actions from '../../actions';

const mapStateToProps = state => ({
  session: state.session,
  boxes: state.box.list,
  selectedBoxId: state.box.selectedId,
});
const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(actions.requestListBox()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
