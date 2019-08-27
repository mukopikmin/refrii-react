import { connect } from "react-redux";

import Notification from "./Notification";
import actions from "../../actions";

const mapStateToProps = state => ({
  message: state.notification.message
});
const mapDispatchToProps = dispatch => ({
  show: message => dispatch(actions.showNotification(message)),
  hide: () => dispatch(actions.hideNotification())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
