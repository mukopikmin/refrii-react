import { connect } from "react-redux";
import BoxInfo from "./BoxInfo";

const mapStateToProps = (state, ownProps) => ({
  box: state.box.target
});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxInfo);
