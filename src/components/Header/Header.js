import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import SettingsIcon from '@material-ui/icons/Settings';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import logo from '../../assets/logo.png';
import styles from './Header.module.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toRoot = this.toRoot.bind(this);
    this.toSetting = this.toSetting.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.reload = this.reload.bind(this);

    this.state = { menuOpen: false };
  }

  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  reload() {
    const { reload } = this.props;

    this.closeMenu();
    reload();
  }

  toRoot() {
    const { history } = this.props;

    this.closeMenu();
    history.push('/');
  }

  toSetting() {
    const { history } = this.props;

    this.closeMenu();
    history.push('/setting');
  }

  render() {
    const { session, signout } = this.props;
    const { menuOpen } = this.state;

    return (
      <div className={styles.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h5" color="inherit" className={styles.flex} onClick={this.toRoot}>
              <img className={styles.logo} src={logo} alt="" />
            </Typography>
            <Button
              buttonRef={(node) => {
                this.anchorEl = node;
              }}
              aria-owns={menuOpen ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={this.toggleMenu}
            >
              <SettingsIcon className={styles.setting} />
            </Button>
            <Popper open={menuOpen} anchorEl={this.anchorEl} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  id="menu-list-grow"
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={this.closeMenu}>
                      <List>
                        <ListItem button onClick={this.toRoot}>
                          <ListItemText primary="食材一覧を表示" />
                        </ListItem>
                        <ListItem button onClick={this.reload}>
                          <ListItemText primary="再読込" />
                        </ListItem>
                        <ListItem button onClick={this.toSetting}>
                          <ListItemText primary="設定" />
                        </ListItem>
                        <Divider />
                        <ListItem button onClick={signout}>
                          <ListItemText
                            primary="ログアウト"
                            secondary={`${session.user.name} としてログインしています`}
                          />
                        </ListItem>
                      </List>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
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
