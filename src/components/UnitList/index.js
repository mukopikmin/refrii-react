import { connect } from "react-redux";
import UnitList from "./UnitList";

const mapStateToProps = (state, ownProps) => ({
  units: state.unit.list
});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnitList);
