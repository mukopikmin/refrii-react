import { connect } from "react-redux";
import NoticesModal from "./NoticesModal";
import actions from "../../actions";

const mapStateToProps = (state, ownProps) => ({
  open: ownProps.open,
  title: ownProps.title,
  notices: ownProps.notices,
  close: ownProps.close
});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoticesModal);
