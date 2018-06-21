import { connect } from 'react-redux';
import FoodList from './FoodList';
import actions from '../../actions';

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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FoodList);
