import { connect } from "react-redux";
import EditAmountModal from "./EditAmountModal";
import actions from "../../actions";

const mapStateToProps = (state, ownProps) => ({
  open: ownProps.open,
  food: ownProps.food,
  close: ownProps.close,
  edit: ownProps.edit
});
const mapDispatchToProps = dispatch => ({
  update: food => dispatch(actions.requestUpdateFood(food))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAmountModal);
