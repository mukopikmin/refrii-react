import { connect } from 'react-redux';
import BoxDrawer from './BoxDrawer';
import actions from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  session: state.session,
  toggleDrawer: ownProps.toggle,
  drawerOpen: ownProps.drawerOpen,
});
const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoxDrawer);
