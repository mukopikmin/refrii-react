import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class Notification extends Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.isOpen = this.isOpen.bind(this);
  }

  handleClose() {
    const { hide } = this.props;

    hide();
  }

  isOpen() {
    const { message } = this.props;

    return message !== '';
  }

  render() {
    const { message } = this.props;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        autoHideDuration={5000}
        open={this.isOpen()}
        onClose={this.handleClose}
        message={message}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    );
  }
}

export default Notification;
