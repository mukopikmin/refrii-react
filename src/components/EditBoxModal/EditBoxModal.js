import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

import Box from '../../models/box';

class EditBoxModal extends Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onNoticeChange = this.onNoticeChange.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.close = this.close.bind(this);
    this.isOpen = this.isOpen.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.remove = this.remove.bind(this);

    this.state = Box.mock().toJson();
  }

  onNameChange(e) {
    const name = e.target.value;

    this.setState({ name });
  }

  onNoticeChange(e) {
    const notice = e.target.value;

    this.setState({ notice });
  }

  onOpened() {
    const { box } = this.props;

    this.setState(box.toJson());
  }

  create() {
    const { create } = this.props;

    create(this.state);
  }

  update() {
    const { update } = this.props;

    update(this.state);
  }

  close() {
    const { close } = this.props;

    close();
  }

  remove() {
    const { remove } = this.props;

    remove(this.state);
  }

  isOpen() {
    const { isEditBoxModalOpen, isNewBoxModalOpen } = this.props;

    return isNewBoxModalOpen || isEditBoxModalOpen;
  }

  renderTitle() {
    const { isEditBoxModalOpen } = this.props;

    return isEditBoxModalOpen ? 'カテゴリの編集' : 'カテゴリの追加';
  }

  renderActions() {
    const { isEditBoxModalOpen } = this.props;

    if (isEditBoxModalOpen) {
      return (
        <div>
          <Button color="primary" onClick={this.update}>更新</Button>
          <Button color="secondary" onClick={this.remove}>削除</Button>
        </div>
      );
    }

    return <Button color="primary" onClick={this.create}>追加</Button>;
  }

  render() {
    const { box } = this.props;
    const { name, notice } = this.state;

    if (!box) {
      return <div />;
    }

    return (
      <Dialog
        fullWidth
        open={this.isOpen()}
        onEnter={this.onOpened}
        onClose={this.close}
      >
        <DialogTitle>{this.renderTitle()}</DialogTitle>
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
          <Grid container spacing={8} alignItems="flex-start">
            <Grid item xs={2}>
              <FormLabel>メモ</FormLabel>
            </Grid>
            <Grid item xs={10}>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={this.close}>キャンセル</Button>
          {this.renderActions()}
        </DialogActions>
      </Dialog>
    );
  }
}

EditBoxModal.propTypes = {
  create: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  isEditBoxModalOpen: PropTypes.bool.isRequired,
  isNewBoxModalOpen: PropTypes.bool.isRequired,
};

export default EditBoxModal;
