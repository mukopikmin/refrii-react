import React, { Component } from 'react';
import { Card, Button, CardFooter, CardText, CardColumns, CardSubtitle, CardBody, Row, Col, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import EditFoodModal from '../EditFoodModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default class FoodList extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: 0,
    };
  }

  toggle(id) {
    this.setState({ dropdownOpen: this.state.dropdownOpen === id ? 0 : id });
  }

  render() {
    const {
      boxes, selectedBoxId, increment, decrement, openEditFoodModal, remove,
    } = this.props;
    const box = boxes.filter(box => box.id === selectedBoxId)[0];

    if (box) {
      return (
        <div>
          <Button color="primary" onClick={openEditFoodModal}>新規作成</Button>
          <EditFoodModal />

          <CardColumns>
            {box.foods.map(food => (
              <Card key={food.id}>
                <CardBody>
                  <Dropdown isOpen={this.state.dropdownOpen === food.id} toggle={() => this.toggle(food.id)}>
                    <DropdownToggle
                      tag="span"
                      onClick={() => this.toggle(food.id)}
                      data-toggle="dropdown"
                      aria-expanded
                    >
                      {food.name}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={() => remove(food)}>削除</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </CardBody>
                <CardBody>
                  <CardText>{food.notice}</CardText>
                  <Row>
                    <Col sm={3}>
                      <Button block outline color="danger" size="sm" onClick={() => decrement(food)}>-</Button>
                    </Col>
                    <Col sm={6} align="center">
                      {food.amount} {food.unit.label}
                    </Col>
                    <Col sm={3}>
                      <Button block outline color="primary" size="sm" onClick={() => increment(food)}>+</Button>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  {food.expiration_date}
                </CardFooter>
              </Card>
          ))}
          </CardColumns>
        </div>
      );
    }
    return <div />;
  }
}
