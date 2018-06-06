import { connect } from 'react-redux';
import BoxList from '../components/BoxList';
import actions from '../actions';

const mapStateToProps = state => ({
  credential: state.credential,
  boxes: state.boxes,
  box: state.box,
});

const mapDispatchToProps = dispatch => ({
  onLoad: jwt => dispatch(actions.requestGetBoxes(jwt)),
  select: box => dispatch(actions.selectBox(box))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoxList);
