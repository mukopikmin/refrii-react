import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, Button, Form, FormGroup, Label, Input,CustomInput } from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class EditFoodModal extends Component {
  constructor() {
    super();

    this.initialState = {
      name: '',
      amount: 0,
      unitId: 0,
      expirationDate: moment(),
      notice: '',
      needsAdding: false,
    };
    this.state = this.initialState;
  }

  componentDidMount() {
    this.props.onLoad();

    this.onNameChange = this.onNameChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onUnitChange = this.onUnitChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onNoticeChange = this.onNoticeChange.bind(this);
    this.onNeedsAddingChange = this.onNeedsAddingChange.bind(this);
    this.submit = this.submit.bind(this);
    this.close = this.close.bind(this);
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onAmountChange(e) {
    this.setState({ amount: e.target.value });
  }

  onUnitChange(e) {
    this.setState({ unitId: e.target.value });
  }

  onDateChange(date) {
    this.setState({expirationDate: date})
  }

  onNoticeChange(e) {
    this.setState({ notice: e.target.value });
  }

  onNeedsAddingChange() {
    this.setState({ needsAdding: !this.state.needsAdding });
  }

  submit() {
    const { boxes, selectedBoxId } = this.props;
    const box = boxes.filter(box => box.id === selectedBoxId)[0];

    this.props.submit({
      ...this.state,
      boxId: selectedBoxId
    });
  }

  close() {
    this.setState(this.initialState);
    this.props.close();
  }

  render() {
    const {isOpen, units, boxes, selectedBoxId} = this.props;

    return (
      <Modal isOpen={isOpen} toggle={this.close}>
        <ModalHeader toggle={this.close}>食材の追加</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="name" sm={3}>名前</Label>
              <Col sm={9}>
                <Input type="text" name="name" id="name" onChange={this.onNameChange} value={this.state.name} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="amount" sm={3}>数量</Label>
              <Col sm={3}>
                <Input type="number" name="amount" id="amount" onChange={this.onAmountChange} value={this.state.amount} />
              </Col>
              <Col sm={6}>
                <Input type="select" name="select" id="unit" onChange={this.onUnitChange} value={this.state.unitId}>
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
                <DatePicker inline
                  customInput={<Input />}
                  name="expiration-date"
                  id="expiration-date"
                  selected={this.state.expirationDate}
                  onChange={this.onDateChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="notice" sm={3}>メモ</Label>
              <Col sm={9}>
                <Input type="textarea" name="notice" id="notice" onChange={this.onNoticeChange} value={this.state.notice} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{ size: 9, offset: 3 }}>
                <FormGroup check>
                  <Label check>
                    <CustomInput type="checkbox" id="needs-adding" onChange={this.onNeedsAddingChange} checked={this.state.needsAdding} label="買い足しが必要" />
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.close}>キャンセル</Button>
          <Button color="primary" onClick={this.submit}>追加</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default EditFoodModal;
