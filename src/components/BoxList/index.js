import { connect } from "react-redux";
import BoxList from "./BoxList";
import actions from "../../actions";

const mapStateToProps = (state, ownProps) => ({
  boxes: state.box.list
});

const mapDispatchToProps = dispatch => ({
  select: box => dispatch(actions.selectBox(box))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxList);
