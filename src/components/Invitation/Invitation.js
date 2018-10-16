import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Collapse, Button, CardBody, Card, Input,
} from 'reactstrap';

import Box from '../../models/box';

class Invitation extends Component {
  constructor() {
    super();

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.toggle = this.toggle.bind(this);
    this.invite = this.invite.bind(this);

    this.state = {
      collapse: false,
      email: '',
    };
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  toggle() {
    this.setState({
      collapse: !this.state.collapse,
      email: '',
    });
  }

  invite() {
    const { box, invite } = this.props;
    const { email } = this.state;

    invite(box, email);
    this.toggle();
  }

  render() {
    return (
      <span>
        <Button id="share" outline color="success" onClick={this.toggle}>共有</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <p align="left">
              共有するユーザーのメールアドレスを入力してください
              </p>
              <Input type="text" value={this.state.email} onChange={this.onChangeEmail} />
              <Button outline color="info" onClick={this.invite}>共有</Button>
            </CardBody>
          </Card>
        </Collapse>
      </span>
    );
  }
}

Invitation.propTypes = {
  box: PropTypes.instanceOf(Box).isRequired,
  invite: PropTypes.func.isRequired,
};

export default Invitation;
