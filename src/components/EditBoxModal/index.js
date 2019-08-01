import { connect } from 'react-redux';
import EditBoxModal from './EditBoxModal';
import actions from '../../actions';
import confirm from '../ConfirmDialog';

const mapStateToProps = (state, ownProps) => ({
  session: state.session,
  open: ownProps.open,
  box: ownProps.box,
  close: ownProps.close,
});
const mapDispatchToProps = dispatch => ({
  create: box => dispatch(actions.requestCreateBox(box)),
  update: box => dispatch(actions.requestUpdateBox(box)),
  remove: (box) => {
    confirm(`${box.name} を削除していいですか？`).then(
      () => dispatch(actions.requestRemoveBox(box)),
      () => {},
    );
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditBoxModal);
