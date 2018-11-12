import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Button from '@material-ui/core/Button';

import Box from '../../models/box';
import Invitation from '../Invitation';

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
    const { box, add } = this.props;

    return (
      <div>
        <h5>{box.name}</h5>
        <p>
          <Button size="sm">{box.owner.name}</Button>
          {box.invitedUsers.map(user => (
            <span key={user.email}>
              {' '}
              <Button size="sm">{user.email}</Button>
            </span>
          ))}
        </p>
        {this.renderNotice()}
        <div align="right">
          <Button outline color="primary" onClick={add}>新規作成</Button>
          {' '}
          <Invitation box={box} />
        </div>
      </div>
    );
  }
}

BoxInfo.propTypes = {
  box: PropTypes.instanceOf(Box).isRequired,
  add: PropTypes.func.isRequired,
};

export default BoxInfo;
