import { connect } from 'react-redux';
import EditUnitModal from './EditUnitModal';
import actions from '../../actions';
import confirm from '../ConfirmDialog';

const mapStateToProps = (state, ownProps) => ({
  unit: ownProps.unit,
  close: ownProps.close,
  open: ownProps.open,
});

const mapDispatchToProps = dispatch => ({
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
