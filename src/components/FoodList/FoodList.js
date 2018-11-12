import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

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
    const { box, foods, add } = this.props;

    if (!box) {
      return <Spinner loading />;
    }

    if (box.getFoods(foods).length === 0) {
      return <p className={styles.message}>食材は登録されていません</p>;
    }

    return (
      <div className={styles.root}>
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
        <div className={styles.add}>
          <Button variant="outlined" color="primary" onClick={add} fullWidth>
            <AddIcon />
          </Button>
        </div>
      </div>
    );
  }
}

FoodList.propTypes = {
  editAmount: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

export default FoodList;
