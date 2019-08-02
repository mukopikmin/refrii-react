import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

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
    const { box, invite, close } = this.props;
    const { email } = this.state;

    invite(box, email);
    close();
  }

  render() {
    const { box, close, open } = this.props;
    const { email } = this.state;

    if (!box) {
      return <div />;
    }

    return (
      <Modal show={open} onHide={close}>
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

export default InvitationDialog;
