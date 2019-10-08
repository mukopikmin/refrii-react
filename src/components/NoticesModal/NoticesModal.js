import React, { Component } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./NoticesDialog.module.css";

class NoticesModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.createNotice = this.createNotice.bind(this);
    this.removeNotice = this.removeNotice.bind(this);
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

  createNotice() {
    const { create, food } = this.props;
    const { text } = this.state;

    create({
      foodId: food.id,
      text: text
    });

    this.setState({
      text: ""
    });
  }

  removeNotice(id) {
    const { remove, food } = this.props;

    remove({
      foodId: food.id,
      id
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
              <Row>
                <Col xs={11}>
                  <div key={idx}>
                    <p>{notice.text}</p>
                    <p className={styles.timestamp}>{notice.createdAt}</p>
                  </div>
                </Col>
                <Col xs={1}>
                  <FontAwesomeIcon
                    className={styles.trashIcon}
                    icon={faTrashAlt}
                    onClick={() => this.removeNotice(notice.id)}
                  />
                </Col>
              </Row>
            );
          })}
          <Form.Control
            as="textarea"
            rows="3"
            value={text}
            onChange={this.onTextChange}
          />
          <Button
            className={styles.createNotice}
            onClick={this.createNotice}
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
