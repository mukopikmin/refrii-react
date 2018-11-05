import React, { Component } from 'react';
import {
  Modal, ModalHeader, ModalBody, ModalFooter, Col, Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { PropTypes } from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';

import Unit from '../../models/unit';

class EditUnitModal extends Component {
  constructor(props) {
    super(props);

    this.onLabelChange = this.onLabelChange.bind(this);
    this.onStepChange = this.onStepChange.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.close = this.close.bind(this);
    this.remove = this.remove.bind(this);
    this.onOpened = this.onOpened.bind(this);

    this.state = Unit.mock().toJson();
  }

  onLabelChange(e) {
    const label = e.target.value;

    this.setState({ label });
  }

  onStepChange(e) {
    const step = e.target.value;

    this.setState({ step });
  }

  onOpened() {
    const { unit } = this.props;

    this.setState(unit.toJson());
  }

  create() {
    const { create } = this.props;

    create(this.state);
  }

  update() {
    const { update } = this.props;

    update(this.state);
  }

  close() {
    const { close } = this.props;

    close();
  }

  remove() {
    const { remove } = this.props;

    remove(this.state);
  }

  isOpen() {
    const { isEditUnitModalOpen, isNewUnitModalOpen } = this.props;

    return isNewUnitModalOpen || isEditUnitModalOpen;
  }

  renderTitle() {
    const { isEditUnitModalOpen } = this.props;

    return isEditUnitModalOpen ? 'ラベルの編集' : 'ラベルの追加';
  }

  renderAction() {
    const { isEditUnitModalOpen } = this.props;

    if (isEditUnitModalOpen) {
      return (
        <div>
          <Button outline color="primary" onClick={this.update}>更新</Button>
          &nbsp;
          <Button outline color="danger" onClick={this.remove}>削除</Button>
        </div>
      );
    }
    return (
      <Button outline color="primary" onClick={this.create}>追加</Button>
    );
  }

  render() {
    const { label, step } = this.state;

    return (
      <Modal isOpen={this.isOpen()} toggle={this.close} onOpened={this.onOpened}>
        <ModalHeader toggle={this.close}>
          {this.renderTitle()}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="label" sm={3}>ラベル</Label>
              <Col sm={9}>
                <Input type="text" name="label" id="label" onChange={this.onLabelChange} value={label} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="step" sm={3}>増減値</Label>
              <Col sm={9}>
                <Input type="number" name="step" id="step" onChange={this.onStepChange} value={step} />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button outline color="secondary" onClick={this.close}>キャンセル</Button>
          {this.renderAction()}
        </ModalFooter>
      </Modal>
    );
  }
}

// EditUnitModal.propTypes = {
//   updateParams: PropTypes.func.isRequired,
//   params: PropTypes.shape({
//     label: PropTypes.string,
//     step: PropTypes.number,
//   }),
//   create: PropTypes.func.isRequired,
//   update: PropTypes.func.isRequired,
//   close: PropTypes.func.isRequired,
//   remove: PropTypes.func.isRequired,
//   isEditUnitModalOpen: PropTypes.bool.isRequired,
//   isNewUnitModalOpen: PropTypes.bool.isRequired,
// };

// EditUnitModal.defaultProps = {
//   params: {
//     label: '',
//     step: 0,
//   },
// };

export default EditUnitModal;
