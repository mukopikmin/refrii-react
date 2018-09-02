import { connect } from 'react-redux';
import EditUnitModal from './EditUnitModal';
import actions from '../../actions';
import confirm from '../ConfirmDialog';

const mapStateToProps = state => ({
  session: state.session,
  isEditUnitModalOpen: state.unit.isEditUnitModalOpen,
  isNewUnitModalOpen: state.unit.isNewUnitModalOpen,
  params: state.unit.params,
});

const mapDispatchToProps = dispatch => ({
  close: () => {
    dispatch(actions.closeNewUnitModal());
    dispatch(actions.closeEditUnitModal());
  },
  create: params => dispatch(actions.requestCreateUnit(params)),
  update: params => dispatch(actions.requestUpdateUnit(params)),
  remove: (params) => {
    confirm('Are you sure').then(
      () => dispatch(actions.requestRemoveUnit(params)),
      () => {},
    );
  },
  updateParams: params => dispatch(actions.setParamsUnit(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUnitModal);
