import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import UserList from '../UserList';
import styles from './Admin.module.css';

class Admin extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item sm={3}>
            <List
              component="nav"
              subheader={<ListSubheader component="div">メニュー</ListSubheader>}
            >
              <ListItem button>
                <ListItemIcon>
                  <SupervisorAccountIcon />
                </ListItemIcon>
                <ListItemText inset primary="ユーザー" />
              </ListItem>
            </List>
          </Grid>
          <Grid item sm={9}>
            <div className={styles.content}>
              <UserList />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Admin;
