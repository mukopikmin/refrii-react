import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import { PropTypes } from 'prop-types';

import Box from '../../models/box';
import Invitation from '../Invitation';

class BoxInfo extends Component {
  render() {
    const { box, add } = this.props;

    return (
      <div>
        <h5>{box.name}</h5>
        <Row>
          <Col sm={6}>
            <p>
              <Button size="sm">{box.owner.name}</Button>
              {box.invitedUsers.map(user => (
                <span key={user.email}>
                  {' '}<Button size="sm">{user.email}</Button>
                </span>
            ))}
            </p>
            {box.notice.split('\n').map(line => <span key={line}>{line}<br /></span>)}
          </Col>
          <Col sm={6}>
            <div align="right">
              <Button outline color="primary" onClick={() => add(box)}>新規作成</Button>{' '}
              <Invitation box={box} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

BoxInfo.propTypes = {
  session: PropTypes.shape({
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
    }),
  }).isRequired,
  box: PropTypes.instanceOf(Box).isRequired,
  add: PropTypes.func.isRequired,
};

export default BoxInfo;
