import React, { Component } from 'react';
import {
  Modal, ModalHeader, ModalBody, ModalFooter, Col, Button,
  Form, FormGroup, Label, Input, CustomInput,
} from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { PropTypes } from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';

import Unit from '../../models/unit';

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
    this.close = this.close.bind(this);

    onLoad();
  }

  onNameChange(e) {
    const { updateParams, params } = this.props;

    updateParams({
      ...params,
      name: e.target.value,
    });
  }

  onAmountChange(e) {
    const { updateParams, params } = this.props;

    updateParams({
      ...params,
      amount: e.target.value,
    });
  }

  onUnitChange(e) {
    const { updateParams, params } = this.props;

    updateParams({
      ...params,
      unitId: e.target.value,
    });
  }

  onDateChange(date) {
    const { updateParams, params } = this.props;

    updateParams({
      ...params,
      expirationDate: date,
    });
  }

  onNoticeChange(e) {
    const { updateParams, params } = this.props;

    updateParams({
      ...params,
      notice: e.target.value,
    });
  }

  onNeedsAddingChange() {
    const { updateParams, params } = this.props;

    updateParams({
      ...params,
      needsAdding: !params.needsAdding,
    });
  }

  create() {
    const { create, selectedBoxId, params } = this.props;

    create({
      name: params.name,
      amount: params.amount,
      notice: params.notice,
      expirationDate: params.expirationDate,
      unitId: params.unitId,
      boxId: selectedBoxId,
    });
  }

  update() {
    const { update, params, selectedBoxId } = this.props;

    update({
      ...params,
      boxId: selectedBoxId,
    });
  }

  close() {
    const { close } = this.props;

    close();
  }

  render() {
    const {
      isEditFoodModalOpen, isNewFoodModalOpen, units, params,
    } = this.props;
    const isOpen = isNewFoodModalOpen || isEditFoodModalOpen;

    return (
      <Modal isOpen={isOpen} toggle={this.close}>
        <ModalHeader toggle={this.close}>
          {(() => (isEditFoodModalOpen ? '食材の編集' : '食材の追加'))()}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="name" sm={3}>名前</Label>
              <Col sm={9}>
                <Input type="text" name="name" id="name" onChange={this.onNameChange} value={params.name} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="amount" sm={3}>数量</Label>
              <Col sm={3}>
                <Input type="number" name="amount" id="amount" onChange={this.onAmountChange} value={params.amount} />
              </Col>
              <Col sm={6}>
                <Input type="select" name="select" id="unit" onChange={this.onUnitChange} value={params.unitId}>
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
                  selected={moment(params.expirationDate)}
                  onChange={this.onDateChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="notice" sm={3}>メモ</Label>
              <Col sm={9}>
                <Input type="textarea" name="notice" id="notice" onChange={this.onNoticeChange} value={params.notice} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{ size: 9, offset: 3 }}>
                <FormGroup check>
                  <Label check>
                    <CustomInput type="checkbox" id="needs-adding" onChange={this.onNeedsAddingChange} checked={params.needsAdding} label="買い足しが必要" />
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
              );
            }
            return (
              <Button color="primary" onClick={this.create}>追加</Button>
            );
          })()}
        </ModalFooter>
      </Modal>
    );
  }
}

EditFoodModal.propTypes = {
  onLoad: PropTypes.func.isRequired,
  updateParams: PropTypes.func.isRequired,
  params: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    unitId: PropTypes.number.isRequired,
    expirationDate: PropTypes.string.isRequired,
    notice: PropTypes.string.isRequired,
    needsAdding: PropTypes.bool.isRequired,
  }).isRequired,
  selectedBoxId: PropTypes.number,
  create: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  isEditFoodModalOpen: PropTypes.bool.isRequired,
  isNewFoodModalOpen: PropTypes.bool.isRequired,
  units: PropTypes.arrayOf(PropTypes.instanceOf(Unit)).isRequired,
};

EditFoodModal.defaultProps = {
  selectedBoxId: 0,
};

export default EditFoodModal;
