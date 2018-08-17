import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { PropTypes } from 'prop-types';

class BoxList extends Component {
  componentDidMount() {
    const { onLoad, credential } = this.props;

    this.select = this.select.bind(this);
    onLoad(credential);
  }

  select(box) {
    this.props.select(box);
    this.props.history.push(`/boxes/${box.id}`);
  }

  render() {
    const { boxes, edit, add } = this.props;

    return (
      <div id="box-list">
        <Nav vertical>
          <p>カテゴリ <FontAwesomeIcon icon={faPlus} size="sm" onClick={() => add()} /></p>
          {boxes.map(box => (
            <NavItem key={box.id} onClick={() => this.select(box)}>
              <NavLink>
                {box.name}
                &nbsp;&nbsp;
                <FontAwesomeIcon icon={faPen} size="sm" onClick={() => edit(box)} />
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </div>
    );
  }
}

BoxList.propTypes = {
  onLoad: PropTypes.func.isRequired,
  credential: PropTypes.func.isRequired,
  select: PropTypes.func.isRequired,
  boxes: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(BoxList);
