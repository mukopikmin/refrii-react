import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { confirmable } from 'react-confirm';

class ConfirmDialog extends Component {
  constructor() {
    super()

    this.state = {
      opened: true
    }
    this.show = this.show.bind(this)
    this.dismiss = this.dismiss.bind(this)
    this.cancel = this.cancel.bind(this)
    this.proceed = this.proceed.bind(this)
  }

  show() {
    console.log('show')
    this.setState({opened:true})
    return this.state.opened;
  }

  dismiss() {
    console.log('dismiss')
    this.setState({opened:false})

  }

  cancel() {
    console.log('cancel')
    this.setState({opened:false})

  }

  proceed() {
    console.log('proceed')
    // this.setState({opened:false})
  }

  render() {
    return (
      <Dialog
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        open={this.show}
        onClose={this.dismiss}
        >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>

    )
  }
}

export default confirmable(ConfirmDialog);
