import { connect } from 'react-redux';
import FoodMenu from './FoodMenu';
import actions from '../../actions';
import confirm from '../ConfirmDialog'

const mapStateToProps = (state, ownProps) => ({
  food: ownProps.food,
});

const mapDispatchToProps = dispatch => ({
  remove: () => {
confirm('Are you sure').then(
  (result) => {
    // `proceed` callback
    console.log('proceed called');
    console.log(result);
  },
  (result) => {
    // `cancel` callback
    console.log('cancel called');
    console.log(result)
  }
)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FoodMenu);
