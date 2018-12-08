import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Food from '../../models/food';

const styles = () => ({
  amount: {
    margin: 20,
    fontSize: 12,
  },
  actions: {
    textAlign: 'center',
    marginTop: 20,
  },
});

class EditAmountModal extends Component {
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.submit = this.submit.bind(this);
    this.edit = this.edit.bind(this);

    this.state = Food.mock().toJson();
  }

  onAmountChange(e) {
    const amount = e.target.value;

    this.setState({ amount });
  }

  onIncrease() {
    this.setState(prev => ({
      ...prev,
      amount: prev.amount + prev.unit.step,
    }));
  }

  onDecrease() {
    this.setState(prev => ({
      ...prev,
      amount: prev.amount - prev.unit.step,
    }));
  }

  onOpened() {
    const { food } = this.props;

    this.setState(food.toJson());
  }

  onClose() {
    const { close } = this.props;

    close();
  }

  submit() {
    const { update } = this.props;

    update(this.state);
  }

  edit() {
    const { edit, food } = this.props;

    edit(food);
  }

  render() {
    const {
      food, isOpen, close, classes,
    } = this.props;
    const { name, amount, unit } = this.state;

    if (!food) {
      return <div />;
    }

    return (
      <Dialog
        open={isOpen}
        onEnter={this.onOpened}
        onClose={this.onClose}
      >
        <DialogTitle>{name}</DialogTitle>
        <DialogContent>
          <List>
            <ListItem>
              <ListItemIcon>
                <ChatBubbleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary={food.notice} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HourglassEmptyIcon />
              </ListItemIcon>
              <ListItemText primary={food.expirationDate} />
            </ListItem>
          </List>
          <div className={classes.actions}>
            <Button variant="outlined" color="secondary" onClick={this.onDecrease}>
              <RemoveIcon />
            </Button>
            <span className={classes.amount}>
              {`${amount} ${unit.label}`}
            </span>
            <Button variant="outlined" color="primary" onClick={this.onIncrease}>
              <AddIcon />
            </Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>キャンセル</Button>
          <Button onClick={this.edit} color="primary">編集</Button>
          <Button onClick={this.submit} color="primary">更新</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

EditAmountModal.propTypes = {
  edit: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default withStyles(styles)(EditAmountModal);
