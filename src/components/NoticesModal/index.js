import { connect } from "react-redux";
import NoticesModal from "./NoticesModal";
import actions from "../../actions";

const mapStateToProps = (state, ownProps) => ({
  food: ownProps.food,
  open: ownProps.open,
  title: ownProps.title,
  notices: ownProps.notices,
  close: ownProps.close
});
const mapDispatchToProps = dispatch => ({
  create: params => dispatch(actions.requestCreateNoticeFood(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoticesModal);
