import { connect } from 'react-redux';
import Invitation from './Invitation';
import actions from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  box: ownProps.box,
});
const mapDispatchToProps = dispatch => ({
  invite: (box, email) => dispatch(actions.requestInviteBox(box, email)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Invitation);
