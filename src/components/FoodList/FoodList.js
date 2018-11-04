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
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: 0,
    };
  }

  toggle(id) {
    this.setState(prev => ({
      dropdownOpen: prev.id === id ? 0 : id,
    }));
  }

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
    const {
      boxes, selectedBoxId, remove, foods,
    } = this.props;
    const { dropdownOpen } = this.state;
    const box = boxes.filter(b => b.id === selectedBoxId)[0];

    if (box) {
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
                      <Dropdown
                        isOpen={dropdownOpen === food.id}
                        toggle={() => this.toggle(food.id)}
                      >
                        <DropdownToggle
                          tag="span"
                          onClick={() => this.toggle(food.id)}
                          data-toggle="dropdown"
                          aria-expanded
                        >
                          <FontAwesomeIcon icon={faEllipsisV} size="sm" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={() => this.edit(food)}>
                          編集
                          </DropdownItem>
                          <DropdownItem onClick={() => remove(food)}>削除</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <EditAmountModal food={food} />
            </div>
          ))}
        </div>
      );
    }

    return <Spinner loading />;
  }
}

FoodList.propTypes = {
  edit: PropTypes.func.isRequired,
  boxes: PropTypes.arrayOf(PropTypes.instanceOf(Box)).isRequired,
  selectedBoxId: PropTypes.number,
  remove: PropTypes.func.isRequired,
};

FoodList.defaultProps = {
  selectedBoxId: 0,
};

export default FoodList;
