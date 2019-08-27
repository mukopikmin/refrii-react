import { connect } from "react-redux";
import Spinner from "./Spinner";

const mapStateToProps = (state, ownProps) => ({
  loading: ownProps.loading
});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spinner);
