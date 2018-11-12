import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import logo from '../../assets/logo.png';
import styles from './Header.module.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleToSetting = this.handleToSetting.bind(this);
  }

  handleToSetting() {
    const { history } = this.props;

    history.push('/setting');
  }

  render() {
    const { session, signout } = this.props;

    return (
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={styles.flex}>
              <img className={styles.logo} src={logo} alt="" />
              <span styles={styles.title}>Refrii</span>
            </Typography>
            <Button color="inherit" onClick={this.handleToSetting}>設定</Button>
            <Button color="inherit" onClick={signout}>ログアウト</Button>
            <Button color="inherit">{session.user.name}</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  session: PropTypes.shape({}).isRequired,
  signout: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Header);
