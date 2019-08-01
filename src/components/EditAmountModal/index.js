import { connect } from 'react-redux';
import EditAmountModal from './EditAmountModal';
import actions from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  // isOpen: state.food.isAmountFoodModalOpen,
  // food: state.food.target,
  open: ownProps.open,
  food: ownProps.food,
  close: ownProps.close,
});
const mapDispatchToProps = dispatch => ({
  update: food => dispatch(actions.requestUpdateFood(food)),
  edit: food => dispatch(actions.openEditFoodModal(food)),
  // close: () => dispatch(actions.closeAmountFoodModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditAmountModal);
