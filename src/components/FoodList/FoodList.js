import React, { Component } from 'react';
import { Card, Button, CardFooter, CardText, CardColumns, CardSubtitle, CardBody, Row, Col } from 'reactstrap';

export default class FoodList extends Component {
  render() {
    const { box } = this.props;

    if (box) {
      return (
        <CardColumns>
          {box.foods.map(food => (
            <Card key={food.id}>
              <CardBody>
                <CardSubtitle>{food.name}</CardSubtitle>
                <CardText>{food.notice}</CardText>
                <Row>
                  <Col sm={3}>
                    <Button block outline color="danger" size="sm">-</Button>
                  </Col>
                  <Col sm={6} align="center">
                    {food.amount} {food.unit.label}
                  </Col>
                  <Col sm={3}>
                    <Button block outline color="primary" size="sm">+</Button>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                {food.expiration_date}
              </CardFooter>
            </Card>
          ))}
        </CardColumns>
      );
    }
    return <div />;
  }
}
