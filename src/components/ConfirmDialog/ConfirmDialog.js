import React, { Component } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { confirmable } from 'react-confirm';
import { PropTypes } from 'prop-types';

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
    const { confirmation } = this.props;
    const { open } = this.state;

    return (
      <Modal isOpen={open} toggle={this.close}>
        <ModalHeader toggle={this.close}>確認</ModalHeader>
        <ModalBody>
          {confirmation}
        </ModalBody>
        <ModalFooter>
          <Button outline color="primary" onClick={this.continue}>実行</Button>
          {' '}
          <Button outline color="secondary" onClick={this.close}>キャンセル</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

ConfirmDialog.propTypes = {
  dismiss: PropTypes.func.isRequired,
  proceed: PropTypes.func.isRequired,
  confirmation: PropTypes.string.isRequired,
};

export default confirmable(ConfirmDialog);
