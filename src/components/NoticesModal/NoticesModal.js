import React, { Component } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Food from "../../models/food";
import styles from "./NoticesDialog.module.css";

class NoticesModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, notices, open, close } = this.props;

    if (!notices || !title) {
      return <div />;
    }

    return (
      <Modal show={open} onShow={this.onOpened} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {notices.map(notice => {
            return (
              <div>
                <p>{notice.text}</p>
                <p className={styles.timestamp}>{notice.createdAt}</p>
              </div>
            );
          })}
        </Modal.Body>
      </Modal>
    );
  }
}

export default NoticesModal;
