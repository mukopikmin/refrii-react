import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';

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
      return (
        <div>
          <p className={styles.message}>
            食材は登録されていません
          </p>
          <p className={styles.message}>
            <Button variant="outlined" color="primary" onClick={add}>
              <AddIcon className={styles.addIcon} />
              食材を登録する
            </Button>
          </p>
        </div>
      );
    }

    return (
      <div className={styles.root}>
        <Grid container spacing={8}>
          {box.getFoods(foods).map(food => (
            <Grid key={food.id} item sm={6} xs={12}>
              <Card className={styles.card} onClick={() => this.editAmount(food)}>
                <CardContent>
                  <div className={styles.name}>
                    <Typography variant="body1" className={styles.title}>
                      {food.name}
                    </Typography>
                  </div>
                  <div className={styles.amount}>
                    <Typography variant="body1" className={styles.title}>
                      {`${food.amount} ${food.unit.label}`}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

FoodList.propTypes = {
  editAmount: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

export default FoodList;
