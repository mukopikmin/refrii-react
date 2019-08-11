import { connect } from 'react-redux';
import EditFoodModal from './EditFoodModal';
import actions from '../../actions';

import confirm from '../ConfirmDialog';

const mapStateToProps = (state, ownProps) => ({
  units: state.unit.list,
  boxes: state.box.list,
  open: ownProps.open,
  box: ownProps.box,
  food: ownProps.food,
  close: ownProps.close,
});
const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(actions.requestListUnit()),
  create: params => dispatch(actions.requestCreateFood(params)),
  update: params => dispatch(actions.requestUpdateFood(params)),
  remove: (food) => {
    confirm(`${food.name} を削除していいですか？`).then(
      () => dispatch(actions.requestRemoveFood(food)),
      () => { },
    );
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditFoodModal);
