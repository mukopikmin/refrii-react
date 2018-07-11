import React, { Component } from 'react';
import EditFoodModal from '../EditFoodModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {

  },
  button: {
    margin: theme.spacing.unit,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class FoodList extends Component {
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
    });
  }

  render() {
    const {
      boxes, selectedBoxId, increment, decrement, add, remove,
    } = this.props;
    const box = boxes.filter(box => box.id === selectedBoxId)[0];
    const { classes } = this.props;

    if (box) {
      return (
        <div>
          <Button variant="contained" color="primary" onClick={add} className={classes.button}>新規作成</Button>
          <EditFoodModal />

          <Grid className={classes.root}>
            <Grid container spacing={16}>
              {box.foods.map(food => (
                <Grid key={food.id} item xs={4} xl={2}>
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography className={classes.title} color="textSecondary">
                        {food.name}
                      </Typography>
                      <Typography variant="headline" component="h2" />
                        <Typography className={classes.pos} color="textSecondary">
                          {food.expirationDate}
                        </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        {food.notice}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button color="secondary" size="small" className={classes.button}>
                        減らす
                      </Button>
                      <Button color="primary" size="small" className={classes.button}>増やす</Button>
                    </CardActions>
                  </Card>
                </Grid>
            ))}
            </Grid>
          </Grid>

        </div>
      );
    }
    return <div />;
  }
}

export default withStyles(styles)(FoodList);
