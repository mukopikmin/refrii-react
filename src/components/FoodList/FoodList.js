import React, { Component } from 'react';
import {
  Card, CardBody, Row,
  Col, Dropdown, DropdownMenu, DropdownToggle, DropdownItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { PropTypes } from 'prop-types';

import Spinner from '../Spinner';
import Box from '../../models/box';
import EditAmountModal from '../EditAmountModal';

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
      return <p>食材は登録されていません</p>
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

// FoodList.propTypes = {
//   edit: PropTypes.func.isRequired,
//   boxes: PropTypes.arrayOf(PropTypes.instanceOf(Box)).isRequired,
//   selectedBoxId: PropTypes.number,
//   remove: PropTypes.func.isRequired,
// };

// FoodList.defaultProps = {
//   selectedBoxId: 0,
// };

export default FoodList;
