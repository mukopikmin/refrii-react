import { connect } from 'react-redux';
import BoxInfo from './BoxInfo';
import actions from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  box: ownProps.box,
});
const mapDispatchToProps = dispatch => ({
  add: () => dispatch(actions.openNewFoodModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoxInfo);
