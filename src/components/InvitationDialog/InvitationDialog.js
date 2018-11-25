import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { PropTypes } from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

import styles from './InvitationDialog.module.css';

class InvitationDialog extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);

    this.state = { email: '' };
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  invite() {
    const { box, invite } = this.props;
    const { email } = this.state;

    invite(box, email);
  }

  render() {
    const { box, close, isInvitationDialogOpen } = this.props;
    const { email } = this.state;

    if (!box) {
      return <div />;
    }

    return (
      <Dialog
        open={isInvitationDialogOpen}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{box.name}</DialogTitle>
        <DialogContent>
          <div className={styles.message}>
            <Typography variant="body1">
          このカテゴリを共有するユーザーのメールアドレスを入力してください。
            </Typography>
          </div>
          <Input type="text" onChange={this.onChangeEmail} value={email} placeholder="メールアドレス" />
        </DialogContent>
        <DialogActions>
          <Button onClick={close}> キャンセル </Button>
          <Button color="primary" onClick={this.create}>追加</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

InvitationDialog.propTypes = {
  close: PropTypes.func.isRequired,
  isInvitationDialogOpen: PropTypes.bool.isRequired,
};

export default InvitationDialog;
