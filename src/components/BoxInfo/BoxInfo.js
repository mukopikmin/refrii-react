import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faPlus } from '@fortawesome/free-solid-svg-icons';
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

  renderInviteButton() {
    const { box, invite } = this.props;

    if (box.isInvited) {
      return <div />;
    }

    return (
      <Badge className={styles.invitedUser} variant="secondary" onClick={invite}>
        <FontAwesomeIcon className={styles.icon} icon={faPlus} />
        <span>共有ユーザーの追加</span>
      </Badge>
    );
  }

  render() {
    const { box, invite } = this.props;

    return (
      <div>
        <h4>{box.name}</h4>

        <div>
          <FontAwesomeIcon className={styles.icon} icon={faUserFriends} />
          <Badge variant="info">{box.owner.name}</Badge>
          {box.invitedUsers.map(user => (
            <Badge className={styles.invitedUser} variant="success">{user.name}</Badge>
          ))}
          {this.renderInviteButton()}
        </div>

        {this.renderNotice()}
      </div>
    );
  }
}

BoxInfo.propTypes = {
  box: PropTypes.instanceOf(Box).isRequired,
};

export default BoxInfo;
