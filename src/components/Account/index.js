import { connect } from 'react-redux';
import Account from './Account';

const mapStateToProps = state => ({
  session: state.session,
});
const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);
