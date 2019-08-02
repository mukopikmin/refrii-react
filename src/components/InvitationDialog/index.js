import { connect } from 'react-redux';
import InvitationDialog from './InvitationDialog';
import actions from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  open: ownProps.open,
  close: ownProps.close,
  box: ownProps.box,
});
const mapDispatchToProps = dispatch => ({
  invite: (box, email) => dispatch(actions.requestInviteBox(box, email)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InvitationDialog);
