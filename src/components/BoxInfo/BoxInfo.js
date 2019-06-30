import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';
import Box from '../../models/box';
import styles from './BoxInfo.module.css';

class BoxInfo extends Component {
  renderNotice() {
    const { box } = this.props;

    return box.notice.split('\n').map((line, key) => {
      const id = `${box.id}-${key}`;

      return (
        <span key={id}>
          {line}
          <br />
        </span>
      );
    });
  }

  render() {
    const { box, add, invite } = this.props;

    return (
      <div>
        <h4>{box.name}</h4>
        <Button onClick={add}>食材の追加</Button>
        {this.renderNotice()}
        <h5>共有しているユーザー</h5>
        <ul>
          <li>{box.owner.name}</li>
          {box.invitedUsers.map(user => (
            <li key={user.email}>
              {user.email}
            </li>
          ))}
        </ul>
        <Button onClick={invite}>共有</Button>
        <Button onClick={invite}>共有</Button>
      </div>
    );
  }
}

BoxInfo.propTypes = {
  box: PropTypes.instanceOf(Box).isRequired,
  add: PropTypes.func.isRequired,
};

export default BoxInfo;
