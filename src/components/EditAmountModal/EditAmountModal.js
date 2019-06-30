import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Modal, Form, Button } from 'react-bootstrap';
import Food from '../../models/food';

class EditAmountModal extends Component {
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.submit = this.submit.bind(this);
    this.edit = this.edit.bind(this);

    this.state = Food.mock().toJson();
  }

  onAmountChange(e) {
    const amount = e.target.value;

    this.setState({ amount });
  }

  onIncrease() {
    this.setState(prev => ({
      ...prev,
      amount: prev.amount + prev.unit.step,
    }));
  }

  onDecrease() {
    this.setState(prev => ({
      ...prev,
      amount: prev.amount - prev.unit.step,
    }));
  }

  onOpened() {
    const { food } = this.props;

    this.setState(food.toJson());
  }

  onClose() {
    const { close } = this.props;

    close();
  }

  submit() {
    const { update } = this.props;

    update(this.state);
  }

  edit() {
    const { edit, food } = this.props;

    edit(food);
  }

  render() {
    const { food, isOpen, close } = this.props;
    const { name, amount, unit } = this.state;

    if (!food) {
      return <div />;
    }

    return (
      <Modal show={isOpen} onShow={this.onOpened} onHide={this.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button onClick={this.onDecrease}>-</Button>
          <Form>
            <Form.Group>
              <Form.Control
                type="number"
                value={amount}
                onChange={this.onAmountChange}
              />
              {unit.label}
            </Form.Group>
          </Form>
          <Button onClick={this.onIncrease}>+</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={close}>キャンセル</Button>
          <Button onClick={this.edit} color="primary">編集</Button>
          <Button onClick={this.submit} color="primary">更新</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

EditAmountModal.propTypes = {
  edit: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default EditAmountModal;
