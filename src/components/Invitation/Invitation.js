import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Collapse, Button, CardBody, Card, Input } from 'reactstrap';

import Box from '../../models/box';

class Invitation extends Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const { box, invite } = this.props;

    return (
      <span>
        <Button id="share" outline color="success" onClick={this.toggle}>共有</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <p align="left">
              共有するユーザーのメールアドレスを入力してください
              </p>
              <Input type="text" />
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
