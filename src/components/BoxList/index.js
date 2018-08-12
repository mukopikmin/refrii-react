import { connect } from 'react-redux';
import BoxList from './BoxList';
import actions from '../../actions';

const mapStateToProps = state => ({
  session: state.session,
  boxes: state.box.list,
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(actions.requestListBox()),
  select: box => dispatch(actions.selectBox(box.id)),
  edit: box => dispatch(actions.openEditBoxModal(box)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoxList);
