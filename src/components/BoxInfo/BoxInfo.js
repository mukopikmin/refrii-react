import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
      <div className={styles.root}>
        <Typography variant="headline" align="right">
          {box.name}
        </Typography>
        <div className={styles.add}>
          <Button color="primary" onClick={add}>食材の追加</Button>
        </div>
        <div>
          {this.renderNotice()}
        </div>
        <div className={styles.invitation}>
          <Typography variant="subheading">
        共有しているユーザー
          </Typography>
          <Button>{box.owner.name}</Button>
          {box.invitedUsers.map(user => (
            <span key={user.email}>
              <Button>{user.email}</Button>
            </span>
          ))}
          <Button onClick={invite}>共有</Button>
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
