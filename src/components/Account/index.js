import { connect } from "react-redux";
import Account from "./Account";
import actions from "../../actions";

const mapStateToProps = (state, ownProps) => ({
  session: state.user.session
});
const mapDispatchToProps = dispatch => ({
  updateUser: (id, name, avatar) =>
    dispatch(actions.requestUpdateUser(id, name, avatar))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);
