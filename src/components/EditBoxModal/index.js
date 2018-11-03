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
  create: params => dispatch(actions.requestCreateBox(params)),
  update: params => dispatch(actions.requestUpdateBox(params)),
  remove: (params) => {
    confirm('Are you sure').then(
      () => dispatch(actions.requestRemoveBox(params)),
      () => {},
    );
  },
  updateParams: params => dispatch(actions.setParamsBox(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditBoxModal);
