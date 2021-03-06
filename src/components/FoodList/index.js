import { connect } from "react-redux";
import FoodList from "./FoodList";

const mapStateToProps = state => ({
  boxes: state.box.list,
  foods: state.food.list,
  box: state.box.target,
  units: state.unit.list
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodList);
