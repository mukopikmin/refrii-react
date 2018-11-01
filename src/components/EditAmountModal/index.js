import { connect } from 'react-redux';
import EditAmountModal from './EditAmountModal';
import actions from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  isOpen: state.food.isAmountFoodModalOpen,
  params: state.food.params
  // food: ownProps.food,
  // close: ownProps.close,
});
const mapDispatchToProps = dispatch => ({
  increment: (_food) => {
    const amount = _food.amount + _food.unit.step;
    const food = {
      ..._food,
      amount,
    };

    dispatch(actions.requestUpdateFood(food));
  },
  decrement: (_food) => {
    const amount = _food.amount - _food.unit.step;
    const food = {
      ..._food,
      amount,
    };

    dispatch(actions.requestUpdateFood(food));
  },
  edit: food => dispatch(actions.openEditFoodModal(food)),
  close: () => dispatch(actions.closeAmountFoodModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditAmountModal);
