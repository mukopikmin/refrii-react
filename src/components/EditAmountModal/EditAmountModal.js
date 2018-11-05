import React, { Component } from 'react';
import {
  Modal, ModalHeader, ModalBody, ModalFooter, Col, Button, Form, Input, Row, Container, InputGroup, InputGroupAddon,
} from 'reactstrap';
import { PropTypes } from 'prop-types';

import Food from '../../models/food';

class EditAmountModal extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
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

  toggle() {
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
    const { food, isOpen } = this.props;
    const { name, amount, unit } = this.state;

    if (!food) {
      return <div />;
    }

    return (
      <Modal isOpen={isOpen} toggle={this.toggle} onOpened={this.onOpened}>
        <ModalHeader toggle={this.toggle}>{name}</ModalHeader>
        <ModalBody>
          <Form inline>
            <Container>
              <Row>
                <Col sm={3}>
                  <Button block outline color="danger" size="sm" onClick={this.onDecrease}>-</Button>
                </Col>
                <Col sm={6}>
                  <InputGroup>
                    <Input type="text" name="amount" id="amount" onChange={this.onAmountChange} value={amount} />
                    <InputGroupAddon addonType="append">{unit.label}</InputGroupAddon>
                  </InputGroup>
                </Col>
                <Col sm={3}>
                  <Button block outline color="primary" size="sm" onClick={this.onIncrease}>+</Button>
                </Col>
              </Row>
            </Container>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button outline color="secondary" onClick={this.close}>キャンセル</Button>
          <Button outline color="primary" onClick={this.edit}>編集</Button>
          <Button outline color="primary" onClick={this.submit}>更新</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default EditAmountModal;
