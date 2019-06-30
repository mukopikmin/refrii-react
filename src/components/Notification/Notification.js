import React, { Component } from 'react';
import { Toast, Container } from 'react-bootstrap';
import styles from './Notification.module.css';

class Notification extends Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.isOpen = this.isOpen.bind(this);
  }

  handleClose() {
    const { hide } = this.props;

    hide();
  }

  isOpen() {
    const { message } = this.props;

    return message !== '';
  }

  render() {
    const { message } = this.props;

    return (
      <div className={styles.toast}>
        <Toast onClose={this.handleClose} show={this.isOpen()} delay={5000} autohide>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </div>
    );
  }
}

export default Notification;
