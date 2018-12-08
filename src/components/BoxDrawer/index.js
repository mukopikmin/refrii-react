import { connect } from 'react-redux';
import BoxDrawer from './BoxDrawer';

const mapStateToProps = (state, ownProps) => ({
  session: state.session,
  toggleDrawer: ownProps.toggle,
  drawerOpen: ownProps.drawerOpen,
});
const mapDispatchToProps = () => ({ });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoxDrawer);
