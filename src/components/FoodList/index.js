import { connect } from 'react-redux';
import FoodList from './FoodList';

const mapStateToProps = state => ({
  box: state.box.selected,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FoodList);
