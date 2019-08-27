import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Food from "../../models/food";

class EditAmountModal extends Component {
  constructor(props) {
    super(props);

    this.onAmountChange = this.onAmountChange.bind(this);
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.submit = this.submit.bind(this);

    this.state = Food.mock().toJson();
  }

  onAmountChange(e) {
    const amount = e.target.value;

    this.setState({ amount });
  }

  onIncrease() {
    this.setState(prev => ({
      ...prev,
      amount: prev.amount + prev.unit.step
    }));
  }

  onDecrease() {
    this.setState(prev => ({
      ...prev,
      amount: prev.amount - prev.unit.step
    }));
  }

  onOpened() {
    const { food } = this.props;

    this.setState(food.toJson());
  }

  submit() {
    const { update, close } = this.props;

    update(this.state);
    close();
  }

  render() {
    const { food, close, edit, open } = this.props;
    const { name, amount, unit } = this.state;

    if (!food) {
      return <div />;
    }

    return (
      <Modal show={open} onShow={this.onOpened} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={3}>
              <Button block variant="outline-danger" onClick={this.onDecrease}>
                <FontAwesomeIcon icon={faMinus} />
              </Button>
            </Col>
            <Col sm={3}>
              <Form>
                <Form.Group>
                  <Form.Control
                    type="number"
                    value={amount}
                    onChange={this.onAmountChange}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col sm={3}>{unit.label}</Col>
            <Col sm={3}>
              <Button block variant="outline-primary" onClick={this.onIncrease}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={close}>キャンセル</Button>
          <Button onClick={() => edit(food)} color="primary">
            編集
          </Button>
          <Button onClick={this.submit} color="primary">
            更新
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

EditAmountModal.propTypes = {
  edit: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
};

export default EditAmountModal;
