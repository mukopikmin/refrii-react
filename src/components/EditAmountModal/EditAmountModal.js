import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import Food from '../../models/food';
import styles from './EditAmountModal.module.css';

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
    const { food, isOpen, close } = this.props;
    const { name, amount, unit } = this.state;

    if (!food) {
      return <div />;
    }

    return (
      <Dialog
        open={isOpen}
        onEnter={this.onOpened}
        onClose={this.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{name}</DialogTitle>
        <DialogContent>
          <div align="center">
            <Button variant="outlined" color="secondary" onClick={this.onDecrease}>
              <RemoveIcon />
            </Button>
            <span className={styles.amount}>
              {`${amount} ${unit.label}`}
            </span>
            <Button variant="outlined" color="primary" onClick={this.onIncrease}>
              <AddIcon />
            </Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>
          キャンセル
          </Button>
          <Button onClick={this.edit} color="primary">
          編集
          </Button>
          <Button onClick={this.submit} color="primary">
          更新
          </Button>
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

export default EditAmountModal;
