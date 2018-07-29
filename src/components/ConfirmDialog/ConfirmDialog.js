import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { confirmable } from 'react-confirm';

class ConfirmDialog extends Component {
  constructor() {
    super();

    this.state = {
      open: true,
    };
    this.close = this.close.bind(this);
    this.continue = this.continue.bind(this);
  }

  close() {
    this.setState({
      open: !this.state.open,
    });
  }

  close() {
    const { dismiss } = this.props;

    this.setState({ open: false });
    dismiss();
  }

  continue() {
    const { proceed } = this.props;

    this.setState({ open: false });
    proceed();
  }

  render() {
    const {
      show, proceed, dismiss, cancel, confirmation,
    } = this.props;

    return (
      <Modal isOpen={this.state.open} toggle={this.close}>
        <ModalHeader toggle={this.close}>確認</ModalHeader>
        <ModalBody>
          {confirmation}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.continue}>実行</Button>{' '}
          <Button color="secondary" onClick={this.close}>キャンセル</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default confirmable(ConfirmDialog);
