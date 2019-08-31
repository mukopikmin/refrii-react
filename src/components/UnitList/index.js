import { connect } from "react-redux";
import UnitList from "./UnitList";
import actions from "../../actions";

const mapStateToProps = (state, ownProps) => ({
  units: ownProps.units
});
const mapDispatchToProps = dispatch => ({
  fetchUnits: () => dispatch(actions.requestListUnit())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnitList);
