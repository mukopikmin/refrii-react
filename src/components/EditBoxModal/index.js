import { connect } from 'react-redux';
import EditBoxModal from './EditBoxModal';
import actions from '../../actions';
import confirm from '../ConfirmDialog';

const mapStateToProps = state => ({
  session: state.session,
  isEditBoxModalOpen: state.box.isEditBoxModalOpen,
  isNewBoxModalOpen: state.box.isNewBoxModalOpen,
  box: state.box.target,
});
const mapDispatchToProps = dispatch => ({
  close: () => {
    dispatch(actions.closeNewBoxModal());
    dispatch(actions.closeEditBoxModal());
  },
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
