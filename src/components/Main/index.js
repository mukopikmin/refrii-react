import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = state => ({
  box: state.box.target,
});
const mapDispatchToProps = () => ({ });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
