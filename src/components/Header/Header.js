import React, { Component } from 'react';
import {
  Navbar, NavbarBrand, Nav, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, Container,
} from 'reactstrap';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import logo from '../../assets/logo.png';
import styles from './Header.module.css';
import User from '../../models/user';

class Header extends Component {
  componentDidMount() {
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
            <Button color="inherit">{session.user.name}</Button>
            <Button color="inherit" onClick={signout}>Signout</Button>
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
