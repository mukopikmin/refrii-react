import { connect } from 'react-redux';
import EditBoxModal from './EditBoxModal';
import actions from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  session: state.session,
  isEditBoxModalOpen: state.box.isEditBoxModalOpen,
  isNewBoxModalOpen: state.box.isNewBoxModalOpen,
  params: state.box.params,
});

const mapDispatchToProps = dispatch => ({
  close: () => {
    dispatch(actions.closeNewBoxModal());
    dispatch(actions.closeEditBoxModal());
  },
  create: params => dispatch(actions.requestCreateBox(params)),
  update: params => dispatch(actions.requestUpdateBox(params)),
  updateParams: params => dispatch(actions.setParamsBox(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditBoxModal);
