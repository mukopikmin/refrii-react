import { connect } from "react-redux";
import Setting from "./Setting";
import actions from "../../actions";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(actions.requestListUnit())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);
