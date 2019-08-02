import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { PropTypes } from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Modal, Form, Button, Col,
} from 'react-bootstrap';

import Unit from '../../models/unit';
import Food from '../../models/food';

class EditFoodModal extends Component {
  constructor(props) {
    super(props);

    const { onLoad } = this.props;

    this.onNameChange = this.onNameChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onUnitChange = this.onUnitChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onNoticeChange = this.onNoticeChange.bind(this);
    this.onNeedsAddingChange = this.onNeedsAddingChange.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    // this.close = this.close.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.remove = this.remove.bind(this);

    this.state = Food.mock().toJson();

    onLoad();
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

  onNoticeChange(e) {
    const notice = e.target.value;

    this.setState({ notice });
  }

  onNeedsAddingChange() {
    this.setState(prev => ({
      ...prev,
      needsAdding: !prev.needsAdding,
    }));
  }

  onOpened() {
    const { food } = this.props;
    const params = food ? food.toJson() : Food.mock().toJson();

    this.setState(params);
  }

  create() {
    const { create, box } = this.props;

    create({
      ...this.state,
      boxId: box.id,
    });
    this.props.close();
  }

  update() {
    const { update, box } = this.props;

    update({
      ...this.state,
      boxId: box.id,
    });
    this.props.close();
  }

  remove() {
    const { remove, food } = this.props;

    remove(food);
    this.props.close();
  }

  renderTitle() {
    const { isEditFoodModalOpen } = this.props;

    return isEditFoodModalOpen ? '食材の編集' : '食材の追加';
  }

  renderActions() {
    const { food } = this.props;

    if (food) {
      return (
        <div>
          <Button color="secondary" onClick={this.remove}>削除</Button>
          <Button color="primary" onClick={this.update}>更新</Button>
        </div>
      );
    }
    return <Button color="primary" onClick={this.create}>追加</Button>;
  }

  render() {
    const { units, food } = this.props;
    const {
      name, amount, expirationDate, notice, unit,
    } = this.state;

    return (
      <Modal show={this.props.open} onShow={this.onOpened} onHide={this.props.close}>
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
                <Form.Control as="select" value={unit.id} onChange={this.onUnitChange}>
                  <option value="-1" />
                  {units.map(u => (
                    <option key={u.id} value={u.id}>{u.label}</option>
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
            <Form.Group>
              <Form.Label>メモ</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                value={notice}
                onChange={this.onNoticeChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.close}>
        キャンセル
          </Button>
          {this.renderActions()}
        </Modal.Footer>
      </Modal>
    );
  }
}

EditFoodModal.propTypes = {
  onLoad: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  units: PropTypes.arrayOf(PropTypes.instanceOf(Unit)).isRequired,
};

export default EditFoodModal;
