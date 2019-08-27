import { connect } from "react-redux";
import BoxList from "./BoxList";
import actions from "../../actions";

const mapStateToProps = state => ({
  boxes: state.box.list
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    dispatch(actions.requestListBox());
    dispatch(actions.requestListFood());
  },
  select: box => dispatch(actions.selectBox(box))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxList);
