import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default class EditFoodModal extends Component {
  componentDidMount() {
    this.props.onLoad();

    this.onNameChange = this.onNameChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onUnitChange = this.onUnitChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onNoticeChange = this.onNoticeChange.bind(this);
    this.onNeedsAddingChange = this.onNeedsAddingChange.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.close = this.close.bind(this);
  }

  onNameChange(e) {
    this.props.updateParams({
      ...this.props.params,
      name: e.target.value
    });
  }

  onAmountChange(e) {
    this.props.updateParams({
      ...this.props.params,
      amount: e.target.value
    });
  }

  onUnitChange(e) {
    this.props.updateParams({
      ...this.props.params,
      unitId: e.target.value
    });
  }

  onDateChange(date) {
    this.props.updateParams({
      ...this.props.params,
      expirationDate: date
    });
  }

  onNoticeChange(e) {
    this.props.updateParams({
      ...this.props.params,
      notice: e.target.value
    });
  }

  onNeedsAddingChange() {
    this.props.updateParams({
      ...this.props.params,
      needsAdding: !this.props.params.needsAdding
    });
  }

  create() {
    const { boxes, selectedBoxId, params } = this.props;
    const box = boxes.filter(box => box.id === selectedBoxId)[0];

    this.props.create({
      name: params.name,
      amount: params.amount,
      notice: params.notice,
      expirationDate: params.expirationDate,
      unitId: params.unitId,
      boxId: selectedBoxId,
    });
  }

  update() {
    const { boxes, selectedBoxId } = this.props;
    const box = boxes.filter(box => box.id === selectedBoxId)[0];

    this.props.update({
      ...this.props.params,
      boxId: selectedBoxId,
    });
  }

  close() {
    this.props.close();
  }

  render() {
    const {
      isEditFoodModalOpen, isNewFoodModalOpen, units, boxes, selectedBoxId,params
    } = this.props;
    const isOpen = isNewFoodModalOpen || isEditFoodModalOpen

    return (
      <Modal isOpen={isOpen} toggle={this.close}>
        <ModalHeader toggle={this.close}>
          {(() => {
            return isEditFoodModalOpen ? '食材の編集' : '食材の追加'
          })()}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="name" sm={3}>名前</Label>
              <Col sm={9}>
                <Input type="text" name="name" id="name" onChange={this.onNameChange} value={this.props.params.name} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="amount" sm={3}>数量</Label>
              <Col sm={3}>
                <Input type="number" name="amount" id="amount" onChange={this.onAmountChange} value={this.props.params.amount} />
              </Col>
              <Col sm={6}>
                <Input type="select" name="select" id="unit" onChange={this.onUnitChange} value={this.props.params.unitId}>
                  <option value="0" />
                  {units.map(unit => (
                    <option key={unit.id} value={unit.id}>{unit.label}</option>
                  ))}
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="expiration-date" sm={3}>期限</Label>
              <Col sm={9}>
                <DatePicker
                  inline
                  customInput={<Input />}
                  name="expiration-date"
                  id="expiration-date"
                  selected={moment(this.props.params.expirationDate)}
                  onChange={this.onDateChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="notice" sm={3}>メモ</Label>
              <Col sm={9}>
                <Input type="textarea" name="notice" id="notice" onChange={this.onNoticeChange} value={this.props.params.notice} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{ size: 9, offset: 3 }}>
                <FormGroup check>
                  <Label check>
                    <CustomInput type="checkbox" id="needs-adding" onChange={this.onNeedsAddingChange} checked={this.props.params.needsAdding} label="買い足しが必要" />
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.close}>キャンセル</Button>
          {(() => {
            if (isEditFoodModalOpen) {
              return (
                <Button color="primary" onClick={this.update}>更新</Button>
              )
            }
            return (
              <Button color="primary" onClick={this.create}>追加</Button>
            )
          })()}
        </ModalFooter>
      </Modal>
    );
  }
}
