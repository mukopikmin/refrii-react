import { connect } from 'react-redux';
import FoodList from './FoodList';
import actions from '../../actions';
import confirm from '../ConfirmDialog';

const mapStateToProps = state => ({
  boxes: state.box.list,
  foods: state.food.list,
  box: state.box.target,
});

const mapDispatchToProps = dispatch => ({
  editAmount: food => dispatch(actions.openAmountFoodModal(food)),
  remove: (food) => {
    confirm('Are you sure').then(
      () => dispatch(actions.requestRemoveFood(food)),
      () => { },
    );
  },
  edit: food => dispatch(actions.openEditFoodModal(food)),
  add: () => dispatch(actions.openNewFoodModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FoodList);
