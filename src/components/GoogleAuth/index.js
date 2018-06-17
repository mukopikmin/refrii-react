import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';
import actions from '../../actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onGoogleAuthorized: token => dispatch(actions.requestGoogleAuth(token.Zi.access_token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoogleAuth);
