import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Form, Button, Col } from "react-bootstrap";

import Food from "../../models/food";

class EditFoodModal extends Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onUnitChange = this.onUnitChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.remove = this.remove.bind(this);

    this.state = Food.mock().toJson();
  }

  onNameChange(e) {
    const name = e.target.value;

    this.setState({ name });
  }

  onAmountChange(e) {
    const amount = e.target.value;

    this.setState({ amount });
  }

  onUnitChange(e) {
    const id = e.target.value;

    this.setState({ unit: { id } });
  }

  onDateChange(date) {
    this.setState({ expirationDate: date });
  }

  onOpened() {
    const { food } = this.props;
    const params = food ? food.toJson() : Food.mock().toJson();

    this.setState(params);
  }

  create() {
    const { create, box, close } = this.props;

    create({
      ...this.state,
      boxId: box.id
    });
    close();
  }

  update() {
    const { update, box, close } = this.props;

    update({
      ...this.state,
      boxId: box.id
    });
    close();
  }

  remove() {
    const { remove, food, close } = this.props;

    remove(food);
    close();
  }

  renderTitle() {
    const { food } = this.props;

    return food ? "食材の編集" : "食材の追加";
  }

  renderActions() {
    const { food } = this.props;

    if (food) {
      return (
        <div>
          <Button color="secondary" onClick={this.remove}>
            削除
          </Button>
          <Button color="primary" onClick={this.update}>
            更新
          </Button>
        </div>
      );
    }
    return (
      <Button color="primary" onClick={this.create}>
        追加
      </Button>
    );
  }

  render() {
    const { units, open, close } = this.props;
    const { name, amount, expirationDate, unit } = this.state;

    return (
      <Modal show={open} onShow={this.onOpened} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{this.renderTitle()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>名前</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={this.onNameChange}
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>数量</Form.Label>
                <Form.Control
                  type="number"
                  value={amount}
                  onChange={this.onAmountChange}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>単位</Form.Label>
                <Form.Control
                  as="select"
                  value={unit.id}
                  onChange={this.onUnitChange}
                >
                  <option value="-1" />
                  {units.map(u => (
                    <option key={u.id} value={u.id}>
                      {u.label}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Label>期限</Form.Label>
            <Form.Group>
              <DatePicker
                inline
                customInput={<input type="text" />}
                selected={moment(expirationDate).toDate()}
                onChange={this.onDateChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            キャンセル
          </Button>
          {this.renderActions()}
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditFoodModal;
