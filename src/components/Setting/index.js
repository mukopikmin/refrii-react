import { connect } from 'react-redux';
import Setting from './Setting';
import actions from '../../actions';

const mapStateToProps = state => ({
  session: state.user.session,
  units: state.unit.list,
});
const mapDispatchToProps = dispatch => ({
  fetchUnits: () => dispatch(actions.requestListUnit()),
  updateUser: (id, name, avatar) => dispatch(actions.requestUpdateUser(id, name, avatar)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Setting);
