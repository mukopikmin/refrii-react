import { connect } from 'react-redux';
import Setting from './Setting';
import actions from '../../actions';

const mapStateToProps = state => ({
  session: state.session,
  units: state.unit.list,
});
const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(actions.requestListUnit()),
  addUnit: () => dispatch(actions.openNewUnitModal()),
  editUnit: unit => dispatch(actions.openEditUnitModal(unit)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Setting);
