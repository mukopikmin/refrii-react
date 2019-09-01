import { connect } from "react-redux";
import UserList from "./UserList";

const mapStateToProps = state => ({
  users: state.user.list
});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
