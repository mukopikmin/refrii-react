import { connect } from 'react-redux';
import EditFoodModal from './EditFoodModal';
import actions from '../../actions';

const mapStateToProps = state => ({
  session: state.session,
  isOpen: state.food.isEditFoodModalOpen,
  units: state.unit.list,
  boxes: state.box.list,
  selectedBoxId: state.box.selectedId,
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(actions.requestListUnit()),
  close: () => dispatch(actions.closeEditFoodModal()),
  submit: params => dispatch(actions.requestCreateFood(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditFoodModal);
