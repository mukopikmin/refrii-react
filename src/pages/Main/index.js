import { connect } from "react-redux";
import Main from "./Main";
import actions from "../../actions";

const mapStateToProps = state => ({
  boxes: state.box.list,
  box: state.box.target
});
const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    dispatch(actions.requestListBox());
    dispatch(actions.requestListFood());
    dispatch(actions.requestListUnit());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
