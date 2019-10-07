import React, { Component } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Food from "../../models/food";
import styles from "./NoticesDialog.module.css";

class NoticesModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.submit = this.submit.bind(this);
  }

  onOpened() {
    this.setState({
      text: ""
    });
  }

  onTextChange(e) {
    const text = e.target.value;

    this.setState({ text });
  }

  submit() {
    const { create, food } = this.props;
    const { text } = this.state;

    create({
      foodId: food.id,
      text: text
    });
  }

  render() {
    const { title, notices, open, close } = this.props;
    const { text } = this.state;

    if (!notices || !title) {
      return <div />;
    }

    return (
      <Modal show={open} onShow={this.onOpened} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {notices.map((notice, idx) => {
            return (
              <div key={idx}>
                <p>{notice.text}</p>
                <p className={styles.timestamp}>{notice.createdAt}</p>
              </div>
            );
          })}
          <Form.Control
            as="textarea"
            rows="3"
            value={text}
            onChange={this.onTextChange}
          />
          <Button
            className={styles.submit}
            onClick={this.submit}
            block
            variant="outline-primary"
          >
            作成
          </Button>
        </Modal.Body>
      </Modal>
    );
  }
}

export default NoticesModal;
