import React, { Component } from 'react';
import { Card, Button, CardFooter, CardText, CardColumns, CardSubtitle, CardBody, Row, Col, Dropdown, DropdownMenu, DropdownToggle, DropdownItem,CardTitle } from 'reactstrap';
import EditFoodModal from '../EditFoodModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

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

  edit(food) {
    this.props.edit({
      ...food,
      unitId: food.unit.id,
    })
  }

  render() {
    const {
      boxes, selectedBoxId, increment, decrement, add, remove,
    } = this.props;
    const box = boxes.filter(box => box.id === selectedBoxId)[0];

    if (box) {
      return (
        <div>
          <Button color="primary" onClick={add}>新規作成</Button>
          <EditFoodModal />

          <CardColumns>
            {box.foods.map(food => (
              <Card key={food.id}>
                <CardBody>
                  <Row>
                    <Col xs={10}><CardTitle>{food.name}</CardTitle></Col>
                    <Col xs={2}>
                      <Dropdown isOpen={this.state.dropdownOpen === food.id} toggle={() => this.toggle(food.id)}>
                        <DropdownToggle
                          tag="span"
                          onClick={() => this.toggle(food.id)}
                          data-toggle="dropdown"
                          aria-expanded
                          >
                          <FontAwesomeIcon icon={faEllipsisV} size="sm" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={() => this.edit(food)}>編集</DropdownItem>
                          <DropdownItem onClick={() => remove(food)}>削除</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                  </Row>
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
                  {food.expirationDate}
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
