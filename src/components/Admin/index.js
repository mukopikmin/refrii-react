import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import Header from '../Header';
import UserList from '../UserList';
import styles from './Admin.module.css';

class Admin extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={styles.content}>
          <Grid container spacing={24}>
            <Grid item sm={3}>
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <SupervisorAccountIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="ユーザー一覧" />
                </ListItem>
              </List>
            </Grid>
            <Grid item sm={9}>
              <UserList />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Admin;
