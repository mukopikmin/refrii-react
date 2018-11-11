import React, { Component } from 'react';
// import {
//   Card, CardBody, Row, Col,
// } from 'reactstrap';
import { PropTypes } from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Spinner from '../Spinner';
import styles from './FoodList.module.css';

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
          <Card key={food.id} className={styles.card} onClick={() => this.editAmount(food)}>
            <CardContent>
              <Typography className={styles.title} color="textSecondary">
                {food.name}
                {`${food.amount} ${food.unit.label}`}
              </Typography>
            </CardContent>
          </Card>
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
