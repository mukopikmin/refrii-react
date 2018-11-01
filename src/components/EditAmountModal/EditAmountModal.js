import React, { Component } from 'react';
import {
  Modal, ModalHeader, ModalBody, ModalFooter, Col, Button, Form, FormGroup, Label, Input, Row, Container, InputGroup, InputGroupAddon,
} from 'reactstrap';
import { PropTypes } from 'prop-types';

class EditAmountModal extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
  }

  onAmountChange() {

  }

  toggle() {
    const { close } = this.props;

    close();
  }

  render() {
    const {
      params, isOpen, decrement, increment,
    } = this.props;

    // if (params) {
      return (
        <Modal isOpen={isOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            {params.name}
          </ModalHeader>
          <ModalBody>
            <Form inline>
              <Container>
                <Row>
                  <Col sm={3}>
                    <Button block outline color="danger" size="sm" onClick={() => decrement(params)}>-</Button>
                  </Col>
                  <Col sm={6}>
                    <InputGroup>
                      <Input type="text" name="amount" id="amount" onChange={this.onAmountChange} value={params.amount} />
                      {/* <InputGroupAddon addonType="append">{params.unit.label}</InputGroupAddon> */}
                    </InputGroup>
                  </Col>
                  <Col sm={3}>
                    <Button block outline color="primary" size="sm" onClick={() => increment(params)}>+</Button>
                  </Col>
                </Row>
              </Container>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button outline color="secondary" onClick={this.close}>キャンセル</Button>
            <Button outline color="primary" onClick={this.update}>更新</Button>
          </ModalFooter>
        </Modal>
      );
    // }

    return <div />;
  }
}

export default EditAmountModal;
