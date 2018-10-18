import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { PropTypes } from 'prop-types';

import Box from '../../models/box';

class BoxList extends Component {
  componentDidMount() {
    const { onLoad } = this.props;

    this.select = this.select.bind(this);
    onLoad();
  }

  select(box) {
    const { select, history } = this.props;

    select(box);
    history.push(`/boxes/${box.id}`);
  }

  render() {
    const { boxes, edit, add } = this.props;

    return (
      <div id="box-list">
        <Nav vertical>
          <p>
カテゴリ
            <FontAwesomeIcon icon={faPlus} size="sm" onClick={() => add()} />
          </p>
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
  select: PropTypes.func.isRequired,
  boxes: PropTypes.arrayOf(PropTypes.instanceOf(Box)).isRequired,
  edit: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(BoxList);
