import React, { Component } from 'react';
import { confirmable } from 'react-confirm';
import { PropTypes } from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class ConfirmDialog extends Component {
  constructor() {
    super();

    this.state = { open: true };

    this.close = this.close.bind(this);
    this.continue = this.continue.bind(this);
  }

  close() {
    const { dismiss } = this.props;

    this.setState({ open: false });
    dismiss();
  }

  continue() {
    const { proceed } = this.props;

    this.setState({ open: false });
    proceed();
  }

  render() {
    const { confirmation } = this.props;
    const { open } = this.state;

    return (
      <Dialog
        open={open}
        onClose={this.close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>確認</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            {confirmation}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.close}>キャンセル</Button>
          <Button color="primary" onClick={this.continue}>実行</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

ConfirmDialog.propTypes = {
  dismiss: PropTypes.func.isRequired,
  proceed: PropTypes.func.isRequired,
  confirmation: PropTypes.string.isRequired,
};

export default confirmable(ConfirmDialog);
