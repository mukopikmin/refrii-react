import React, { Component } from 'react';
import {
  Col, Form, FormGroup, Label, Input, CustomInput,
} from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { PropTypes } from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

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
    this.close = this.close.bind(this);
    this.onOpened = this.onOpened.bind(this);

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
    const unitId = e.target.value;

    this.setState({ unitId });
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

    this.setState(food.toJson());
  }

  create() {
    const { create, box } = this.props;

    create({
      ...this.state,
      boxId: box.id,
    });
  }

  update() {
    const { update, box } = this.props;

    update({
      ...this.state,
      boxId: box.id,
    });
  }

  close() {
    const { close } = this.props;

    close();
  }

  isOpen() {
    const { isEditFoodModalOpen, isNewFoodModalOpen } = this.props;

    return isNewFoodModalOpen || isEditFoodModalOpen;
  }

  renderTitle() {
    const { isEditFoodModalOpen } = this.props;

    return isEditFoodModalOpen ? '食材の編集' : '食材の追加';
  }

  renderAction() {
    const { isEditFoodModalOpen } = this.props;

    if (isEditFoodModalOpen) {
      return <Button color="primary" onClick={this.update}>更新 </Button>;
    }
    return <Button color="primary" onClick={this.create}>追加</Button>;
  }

  render() {
    const { units, food } = this.props;
    const {
      name, amount, unit, expirationDate, notice,
    } = this.state;

    if (!food) {
      return <div />;
    }

    return (
      <Dialog
        open={this.isOpen()}
        onEnter={this.onOpened}
        onClose={this.close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{name}</DialogTitle>
        <DialogContent>
          <Form>
            <FormGroup row>
              <Label for="name" sm={3}>名前</Label>
              <Col sm={9}>
                <Input type="text" name="name" id="name" onChange={this.onNameChange} value={name} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="amount" sm={3}>数量</Label>
              <Col sm={3}>
                <Input type="number" name="amount" id="amount" onChange={this.onAmountChange} value={amount} />
              </Col>
              <Col sm={6}>
                <Input type="select" name="select" id="unit" onChange={this.onUnitChange} value={unit.id}>
                  <option value="0" />
                  {units.map(u => (
                    <option key={u.id} value={u.id}>{u.label}</option>
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
                  selected={moment(expirationDate)}
                  onChange={this.onDateChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="notice" sm={3}>メモ</Label>
              <Col sm={9}>
                <Input type="textarea" name="notice" id="notice" onChange={this.onNoticeChange} value={notice} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{ size: 9, offset: 3 }}>
                <FormGroup check>
                  <Label check>
                    <CustomInput type="checkbox" id="needs-adding" onChange={this.onNeedsAddingChange} checked={food.needsAdding} label="買い足しが必要" />
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
          </Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.close}>キャンセル</Button>
          {this.renderAction()}
        </DialogActions>
      </Dialog>
    );
  }
}

EditFoodModal.propTypes = {
  onLoad: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  isEditFoodModalOpen: PropTypes.bool.isRequired,
  isNewFoodModalOpen: PropTypes.bool.isRequired,
  units: PropTypes.arrayOf(PropTypes.instanceOf(Unit)).isRequired,
};

export default EditFoodModal;
