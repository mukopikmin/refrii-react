import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends, faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./BoxInfo.module.css";
import InvitationDialog from "../InvitationDialog";

class BoxInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };
    this.invite = this.invite.bind(this);
    this.close = this.close.bind(this);
  }

  invite() {
    const { box } = this.props;

    this.setState(pre => ({
      ...pre,
      modalOpen: true,
      box
    }));
  }

  close() {
    this.setState(pre => ({
      ...pre,
      modalOpen: false,
      box: null
    }));
  }

  renderNotice() {
    const { box } = this.props;

    return box.notice.split("\n").map((line, key) => {
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
    const { box } = this.props;

    if (box.isInvited) {
      return <div />;
    }

    return (
      <Badge
        className={styles.invitedUser}
        variant="secondary"
        onClick={this.invite}
      >
        <FontAwesomeIcon className={styles.icon} icon={faPlus} />
        <span>共有ユーザーの追加</span>
      </Badge>
    );
  }

  render() {
    const { box } = this.props;
    const { modalOpen } = this.state;

    return (
      <div>
        <h4>{box.name}</h4>

        <div>
          <FontAwesomeIcon className={styles.icon} icon={faUserFriends} />
          <Badge variant="info">{box.owner.name}</Badge>
          {box.invitedUsers.map(user => (
            <Badge
              key={user.id}
              className={styles.invitedUser}
              variant="success"
            >
              {user.name}
            </Badge>
          ))}
          {this.renderInviteButton()}
        </div>

        {this.renderNotice()}

        <InvitationDialog open={modalOpen} close={this.close} box={box} />
      </div>
    );
  }
}

export default BoxInfo;
