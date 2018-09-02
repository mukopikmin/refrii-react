import { connect } from 'react-redux';
import FoodList from './FoodList';
import actions from '../../actions';
import confirm from '../ConfirmDialog';

const mapStateToProps = state => ({
  boxes: state.box.list,
  selectedBoxId: state.box.selectedId,
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
  remove: (food) => {
    confirm('Are you sure').then(
      () => dispatch(actions.requestRemoveFood(food)),
      () => {},
    );
  },
  edit: food => dispatch(actions.openEditFoodModal(food)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FoodList);
