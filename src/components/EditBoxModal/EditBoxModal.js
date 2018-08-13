import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default class EditBoxModal extends Component {
  componentDidMount() {
    this.onNameChange = this.onNameChange.bind(this);
    this.onNoticeChange = this.onNoticeChange.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.close = this.close.bind(this);
  }

  onNameChange(e) {
    this.props.updateParams({
      ...this.props.params,
      name: e.target.value,
    });
  }

  onNoticeChange(e) {
    this.props.updateParams({
      ...this.props.params,
      notice: e.target.value,
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
    this.props.update(this.props.params);
  }

  close() {
    this.props.close();
  }

  render() {
    const {
      isEditBoxModalOpen, isNewBoxModalOpen, units, boxes, selectedBoxId, params,
    } = this.props;
    const isOpen = isNewBoxModalOpen || isEditBoxModalOpen;

    return (
      <Modal isOpen={isOpen} toggle={this.close}>
        <ModalHeader toggle={this.close}>
          {(() => (isEditBoxModalOpen ? '食材の編集' : '食材の追加'))()}
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
              <Label for="notice" sm={3}>メモ</Label>
              <Col sm={9}>
                <Input type="textarea" name="notice" id="notice" onChange={this.onNoticeChange} value={this.props.params.notice} />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.close}>キャンセル</Button>
          {(() => {
            if (isEditBoxModalOpen) {
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
