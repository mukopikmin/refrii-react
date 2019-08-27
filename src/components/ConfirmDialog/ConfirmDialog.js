import React, { Component } from "react";
import { confirmable } from "react-confirm";
import { PropTypes } from "prop-types";
import { Modal, Button } from "react-bootstrap";

class ConfirmDialog extends Component {
  constructor() {
    super();

    this.state = { open: true };

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
      <Modal show={open}>
        <Modal.Header closeButton>
          <Modal.Title>確認</Modal.Title>
        </Modal.Header>
        <Modal.Body>{confirmation}</Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>キャンセル</Button>
          <Button color="primary" onClick={this.continue}>
            実行
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

ConfirmDialog.propTypes = {
  dismiss: PropTypes.func.isRequired,
  proceed: PropTypes.func.isRequired,
  confirmation: PropTypes.string.isRequired
};

export default confirmable(ConfirmDialog);
