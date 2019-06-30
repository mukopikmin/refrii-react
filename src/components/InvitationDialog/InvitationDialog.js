import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

import styles from './InvitationDialog.module.css';

class InvitationDialog extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.invite = this.invite.bind(this);

    this.state = { email: '' };
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  invite() {
    const { box, invite } = this.props;
    const { email } = this.state;

    invite(box, email);
  }

  render() {
    const { box, close, isInvitationDialogOpen } = this.props;
    const { email } = this.state;

    if (!box) {
      return <div />;
    }

    return (
      <Modal show={isInvitationDialogOpen} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{box.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        このカテゴリを共有するユーザーのメールアドレスを入力してください。
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                value={email}
                onChange={this.onChangeEmail}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={close}> キャンセル </Button>
          <Button color="primary" onClick={this.invite}>追加</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

InvitationDialog.propTypes = {
  close: PropTypes.func.isRequired,
  isInvitationDialogOpen: PropTypes.bool.isRequired,
};

export default InvitationDialog;
