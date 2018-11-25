import { connect } from 'react-redux';
import EditFoodModal from './EditFoodModal';
import actions from '../../actions';

import confirm from '../ConfirmDialog';

const mapStateToProps = state => ({
  session: state.session,
  isEditFoodModalOpen: state.food.isEditFoodModalOpen,
  isNewFoodModalOpen: state.food.isNewFoodModalOpen,
  units: state.unit.list,
  boxes: state.box.list,
  box: state.box.target,
  food: state.food.target,
});
const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(actions.requestListUnit()),
  close: () => {
    dispatch(actions.closeNewFoodModal());
    dispatch(actions.closeEditFoodModal());
  },
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
