import { connect } from 'react-redux';
import EditAmountModal from './EditAmountModal';
import actions from '../../actions';

const mapStateToProps = state => ({
  isOpen: state.food.isAmountFoodModalOpen,
  food: state.food.target,
});
const mapDispatchToProps = dispatch => ({
  update: food => dispatch(actions.requestUpdateFood(food)),
  edit: food => dispatch(actions.openEditFoodModal(food)),
  close: () => dispatch(actions.closeAmountFoodModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditAmountModal);
