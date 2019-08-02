import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import { Modal, Form, Button } from 'react-bootstrap';

import Unit from '../../models/unit';

class EditUnitModal extends Component {
  constructor(props) {
    super(props);

    this.onLabelChange = this.onLabelChange.bind(this);
    this.onStepChange = this.onStepChange.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
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
    const params = unit ? unit.toJson() : Unit.mock().toJson();

    this.setState(params);
  }

  create() {
    const { create } = this.props;

    create(this.state);
    this.props.close();
  }

  update() {
    const { update } = this.props;

    update(this.state);
    this.props.close();
  }

  remove() {
    const { remove } = this.props;

    remove(this.state);
    this.props.close();
  }

  renderTitle() {
    const { isEditUnitModalOpen } = this.props;

    return isEditUnitModalOpen ? 'ラベルの編集' : 'ラベルの追加';
  }

  renderAction() {
    const { unit } = this.props;

    if (unit) {
      return (
        <div>
          <Button color="secondary" onClick={this.remove}>削除</Button>
          <Button color="primary" onClick={this.update}>更新</Button>
        </div>
      );
    }
    return (
      <Button color="primary" onClick={this.create}>追加</Button>
    );
  }

  render() {
    const { label, step } = this.state;

    return (
      <Modal show={this.props.open} onShow={this.onOpened} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>{this.renderTitle()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>ラベル</Form.Label>
              <Form.Control
                type="text"
                value={label}
                onChange={this.onLabelChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>増減値</Form.Label>
              <Form.Control
                type="number"
                value={step}
                onChange={this.onStepChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.close}>
          キャンセル
          </Button>
          {this.renderAction()}
        </Modal.Footer>
      </Modal>
    );
  }
}

EditUnitModal.propTypes = {
  params: PropTypes.shape({
    label: PropTypes.string,
    step: PropTypes.number,
  }),
  create: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

EditUnitModal.defaultProps = {
  params: {
    label: '',
    step: 0,
  },
};

export default EditUnitModal;
