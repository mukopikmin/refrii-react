import { connect } from 'react-redux';
import BoxList from '../components/BoxList';
import actions from '../actions';

const mapStateToProps = state => ({
  credential: state.credential,
  boxes: state.boxes,
  selectedBox: state.selectedBox,
});

const mapDispatchToProps = dispatch => ({
  onLoad: jwt => dispatch(actions.requestGetBoxes(jwt)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoxList);
