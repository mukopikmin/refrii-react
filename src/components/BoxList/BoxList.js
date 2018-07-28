import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { withRouter } from 'react-router-dom';

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
    const { boxes } = this.props;

    return (
      <div id="box-list">
        <Nav vertical>
          <p>カテゴリ</p>
          {boxes.map(box => (
            <NavItem key={box.id}>
              <NavLink onClick={() => this.select(box)}>{box.name}</NavLink>
            </NavItem>
          ))}
        </Nav>
      </div>
    );
  }
}

export default withRouter(BoxList);
