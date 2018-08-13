import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

class BoxList extends Component {
  constructor() {
    super();

    this.select = this.select.bind(this);
  }
  componentDidMount() {
    const { onLoad, credential } = this.props;
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
            <NavItem key={box.id}>
              <NavLink>
                <span onClick={() => this.select(box)}>
                  {box.name}
                </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faPen} size="sm" onClick={() => edit(box)} />
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </div>
    );
  }
}

export default withRouter(BoxList);
