import React, { Component } from 'react';
import {
  Card, CardBody, Row, Col,
} from 'reactstrap';
import { PropTypes } from 'prop-types';

import Spinner from '../Spinner';

class FoodList extends Component {
  edit(food) {
    const { edit } = this.props;

    edit({
      ...food,
      unitId: food.unit.id,
    });
  }

  editAmount(food) {
    const { editAmount } = this.props;

    editAmount(food);
  }

  render() {
    const { box, foods } = this.props;

    if (!box) {
      return <Spinner loading />;
    }

    if (box.getFoods(foods).length === 0) {
      return <p>食材は登録されていません</p>;
    }

    return (
      <div>
        {box.getFoods(foods).map(food => (
          <div key={food.id}>
            <Card onClick={() => this.editAmount(food)}>
              <CardBody>
                <Row>
                  <Col xs={6}>
                    <span>{food.name}</span>
                  </Col>
                  <Col xs={6}>
                    {`${food.amount} ${food.unit.label}`}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}

FoodList.propTypes = {
  editAmount: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

export default FoodList;
