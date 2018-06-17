import { connect } from 'react-redux';
import BoxList from '../components/BoxList';
import actions from '../actions';
console.log(actions)
const mapStateToProps = state => ({
  session: state.session,
  boxes: state.box.list,
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(actions.requestGetBoxes()),
  select: box => dispatch(actions.selectBox(box)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoxList);
