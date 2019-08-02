import { connect } from 'react-redux';
import EditUnitModal from './EditUnitModal';
import actions from '../../actions';
import confirm from '../ConfirmDialog';

const mapStateToProps = (state, ownProps) => ({
  session: state.session,
  // isEditUnitModalOpen: state.unit.isEditUnitModalOpen,
  // isNewUnitModalOpen: state.unit.isNewUnitModalOpen,
  unit: ownProps.unit,
  close: ownProps.close,
  open: ownProps.open,
});

const mapDispatchToProps = dispatch => ({
  // close: () => {
  //   dispatch(actions.closeNewUnitModal());
  //   dispatch(actions.closeEditUnitModal());
  // },
  create: unit => dispatch(actions.requestCreateUnit(unit)),
  update: unit => dispatch(actions.requestUpdateUnit(unit)),
  remove: (unit) => {
    confirm(`${unit.label} を削除していいですか？`).then(
      () => dispatch(actions.requestRemoveUnit(unit)),
      () => { /* Do nothing */ },
    );
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUnitModal);
