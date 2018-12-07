import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { PropTypes } from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import 'react-datepicker/dist/react-datepicker.css';

import Unit from '../../models/unit';
import Food from '../../models/food';

const styles = theme => ({
  datePicker: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

class EditFoodModal extends Component {
  constructor(props) {
    super(props);

    const { onLoad } = this.props;

    this.onNameChange = this.onNameChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onUnitChange = this.onUnitChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onNoticeChange = this.onNoticeChange.bind(this);
    this.onNeedsAddingChange = this.onNeedsAddingChange.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.close = this.close.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.remove = this.remove.bind(this);

    this.state = Food.mock().toJson();

    onLoad();
  }

  onNameChange(e) {
    const name = e.target.value;

    this.setState({ name });
  }

  onAmountChange(e) {
    const amount = e.target.value;

    this.setState({ amount });
  }

  onUnitChange(e) {
    const id = e.target.value;

    this.setState({ unit: { id } });
  }

  onDateChange(date) {
    this.setState({ expirationDate: date });
  }

  onNoticeChange(e) {
    const notice = e.target.value;

    this.setState({ notice });
  }

  onNeedsAddingChange() {
    this.setState(prev => ({
      ...prev,
      needsAdding: !prev.needsAdding,
    }));
  }

  onOpened() {
    const { food } = this.props;

    this.setState(food.toJson());
  }

  create() {
    const { create, box } = this.props;

    create({
      ...this.state,
      boxId: box.id,
    });
  }

  update() {
    const { update, box } = this.props;

    update({
      ...this.state,
      boxId: box.id,
    });
  }

  remove() {
    const { remove, food } = this.props;

    remove(food);
  }

  close() {
    const { close } = this.props;

    close();
  }

  isOpen() {
    const { isEditFoodModalOpen, isNewFoodModalOpen } = this.props;

    return isNewFoodModalOpen || isEditFoodModalOpen;
  }

  renderTitle() {
    const { isEditFoodModalOpen } = this.props;

    return isEditFoodModalOpen ? '食材の編集' : '食材の追加';
  }

  renderActions() {
    const { isEditFoodModalOpen } = this.props;

    if (isEditFoodModalOpen) {
      return (
        <div>
          <Button color="secondary" onClick={this.remove}>削除</Button>
          <Button color="primary" onClick={this.update}>更新</Button>
        </div>
      );
    }
    return <Button color="primary" onClick={this.create}>追加</Button>;
  }

  render() {
    const { units, food, classes } = this.props;
    const {
      name, amount, unit, expirationDate, notice, needsAdding,
    } = this.state;

    if (!food) {
      return <div />;
    }

    return (
      <Dialog
        fullWidth
        open={this.isOpen()}
        onEnter={this.onOpened}
        onClose={this.close}
      >
        <DialogTitle>{name}</DialogTitle>
        <DialogContent>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={2}>
              <FormLabel>名前</FormLabel>
            </Grid>
            <Grid item xs={10}>
              <TextField
                fullWidth
                margin="dense"
                variant="outlined"
                value={name}
                onChange={this.onNameChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={2}>
              <FormLabel>数量</FormLabel>
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                type="number"
                margin="dense"
                variant="outlined"
                value={amount}
                onChange={this.onAmountChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                select
                margin="dense"
                variant="outlined"
                value={unit.id}
                onChange={this.onUnitChange}
              >
                {units.map(u => (
                  <MenuItem key={u.id} value={u.id}>
                    {u.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-start">
            <Grid item xs={2}>
              <FormLabel>期限</FormLabel>
            </Grid>
            <Grid item xs={10} className={classes.datePicker}>
              <DatePicker
                inline
                customInput={<TextField />}
                selected={moment(expirationDate)}
                onChange={this.onDateChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-start">
            <Grid item xs={2}>
              <FormLabel>メモ</FormLabel>
            </Grid>
            <Grid item xs={10} className={classes.datePicker}>
              <TextField
                fullWidth
                multiline
                margin="dense"
                variant="outlined"
                value={notice}
                onChange={this.onNoticeChange}
              />
            </Grid>
          </Grid>
          <FormControlLabel
            control={(
              <Checkbox
                color="primary"
                checked={needsAdding}
                onChange={this.onNeedsAddingChange}
              />
            )}
            label="買い足しが必要"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.close}>キャンセル</Button>
          {this.renderActions()}
        </DialogActions>
      </Dialog>
    );
  }
}

EditFoodModal.propTypes = {
  onLoad: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  isEditFoodModalOpen: PropTypes.bool.isRequired,
  isNewFoodModalOpen: PropTypes.bool.isRequired,
  units: PropTypes.arrayOf(PropTypes.instanceOf(Unit)).isRequired,
};

export default withStyles(styles)(EditFoodModal);
