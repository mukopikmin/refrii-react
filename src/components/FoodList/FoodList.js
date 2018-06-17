import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody, CardLink } from 'reactstrap';

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
                <Button block>Button</Button>
                  <CardLink href="#">Link</CardLink>
                    <CardLink href="#">Another</CardLink>
              </CardBody>
            </Card>
          ))}
        </CardColumns>
      );
    }
    return <div />;
  }
}
