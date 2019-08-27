import { connect } from "react-redux";
import UserList from "./UserList";
import actions from "../../actions";

const mapStateToProps = state => ({
  users: state.user.list
});
const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(actions.requestListUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
