import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';

export default class EditUnitModal extends Component {
  componentDidMount() {
    this.onLabelChange = this.onLabelChange.bind(this);
    this.onStepChange = this.onStepChange.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.close = this.close.bind(this);
  }

  onLabelChange(e) {
    this.props.updateParams({
      ...this.props.params,
      label: e.target.value,
    });
  }

  onStepChange(e) {
    this.props.updateParams({
      ...this.props.params,
      step: e.target.value,
    });
  }

  create() {
    const { params } = this.props;

    this.props.create({
      label: params.label,
      step: params.step,
    });
  }

  update() {
    this.props.update(this.props.params);
  }

  close() {
    this.props.close();
  }

  remove(params) {
    this.props.remove(params);
  }

  render() {
    const {
      isEditUnitModalOpen, isNewUnitModalOpen, params,
    } = this.props;
    const isOpen = isNewUnitModalOpen || isEditUnitModalOpen;

    return (
      <Modal isOpen={isOpen} toggle={this.close}>
        <ModalHeader toggle={this.close}>
          {(() => (isEditUnitModalOpen ? 'ラベルの編集' : 'ラベルの追加'))()}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="label" sm={3}>ラベル</Label>
              <Col sm={9}>
                <Input type="text" name="label" id="label" onChange={this.onLabelChange} value={this.props.params.label} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="step" sm={3}>メモ</Label>
              <Col sm={9}>
                <Input type="number" name="step" id="step" onChange={this.onStepChange} value={this.props.params.step} />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button outline color="secondary" onClick={this.close}>キャンセル</Button>
          {(() => {
            if (isEditUnitModalOpen) {
              return (
                <div>
                  <Button outline color="primary" onClick={this.update}>更新</Button>
                  &nbsp;
                  <Button outline color="danger" onClick={() => this.remove(params)}>削除</Button>
                </div>
              );
            }
            return (
              <Button outline color="primary" onClick={this.create}>追加</Button>
            );
          })()}
        </ModalFooter>
      </Modal>
    );
  }
}
