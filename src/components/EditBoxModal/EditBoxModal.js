import React, { Component } from 'react';
import {
  Modal, ModalHeader, ModalBody, ModalFooter, Col, Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { PropTypes } from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';

class EditBoxModal extends Component {
  componentDidMount() {
    this.onNameChange = this.onNameChange.bind(this);
    this.onNoticeChange = this.onNoticeChange.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.close = this.close.bind(this);
  }

  onNameChange(e) {
    const { updateParams, params } = this.props;

    updateParams({
      ...params,
      name: e.target.value,
    });
  }

  onNoticeChange(e) {
    const { updateParams, params } = this.props;

    updateParams({
      ...params,
      notice: e.target.value,
    });
  }

  create() {
    const { create, params } = this.props;

    create({
      name: params.name,
      notice: params.notice,
    });
  }

  update() {
    const { update, params } = this.props;

    update(params);
  }

  close() {
    const { close } = this.props;

    close();
  }

  remove(params) {
    const { remove } = this.props;

    remove(params);
  }

  render() {
    const { isEditBoxModalOpen, isNewBoxModalOpen, params } = this.props;
    const isOpen = isNewBoxModalOpen || isEditBoxModalOpen;

    return (
      <Modal isOpen={isOpen} toggle={this.close}>
        <ModalHeader toggle={this.close}>
          {(() => (isEditBoxModalOpen ? 'カテゴリの編集' : 'カテゴリの追加'))()}
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
              <Label for="notice" sm={3}>メモ</Label>
              <Col sm={9}>
                <Input type="textarea" name="notice" id="notice" onChange={this.onNoticeChange} value={params.notice} />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button outline color="secondary" onClick={this.close}>キャンセル</Button>
          {(() => {
            if (isEditBoxModalOpen) {
              return (
                <div>
                  <Button outline color="primary" onClick={this.update}>更新</Button>
                  {' '}
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

EditBoxModal.propTypes = {
  updateParams: PropTypes.func.isRequired,
  params: PropTypes.shape({
    name: PropTypes.string.isRequired,
    notice: PropTypes.string.isRequired,
  }).isRequired,
  create: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  isEditBoxModalOpen: PropTypes.bool.isRequired,
  isNewBoxModalOpen: PropTypes.bool.isRequired,
};

export default EditBoxModal;
