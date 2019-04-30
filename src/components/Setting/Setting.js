import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Grid from '@material-ui/core/Grid';

import Header from '../Header';
import styles from './Setting.module.css';

class Setting extends Component {
  constructor(props) {
    super(props);

    const { onLoad } = this.props;

    onLoad();
  }

  render() {
    const {
      units, session, addUnit, editUnit,
    } = this.props;
    const { user } = session;

    return (
      <div>
        <Header />
        <div className={styles.content}>
          <Grid container justify="center">
            <Grid item xs={12} sm={12} md={6}>
              <div className={styles.root}>
                <Typography variant="h5">設定</Typography>

                <Paper className={styles.paper}>
                  <List
                    component="nav"
                    subheader={<ListSubheader component="div">アカウント情報</ListSubheader>}
                  >
                    <ListItem button>
                      <ListItemText primary="ユーザー名" secondary={user.name} />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="メールアドレス" secondary={user.email} />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="認証サービス" secondary={user.provider} />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <EditIcon />
                      </ListItemIcon>
                      <ListItemText primary="アカウント情報の編集" />
                    </ListItem>
                  </List>
                </Paper>

                <Paper className={styles.paper}>
                  <List
                    component="nav"
                    subheader={<ListSubheader component="div">登録されている単位</ListSubheader>}
                  >
                    {units.map(unit => (
                      <ListItem button key={unit.id}>
                        <ListItemIcon onClick={() => editUnit(unit)}>
                          <EditIcon />
                        </ListItemIcon>
                        <ListItemText primary={unit.label} />
                      </ListItem>
                    ))}
                    <ListItem button onClick={addUnit}>
                      <ListItemIcon>
                        <AddIcon />
                      </ListItemIcon>
                      <ListItemText primary="単位の追加" />
                    </ListItem>
                  </List>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Setting.propTypes = {
  onLoad: PropTypes.func.isRequired,
  units: PropTypes.arrayOf(PropTypes.any).isRequired,
  session: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  addUnit: PropTypes.func.isRequired,
  editUnit: PropTypes.func.isRequired,
};

export default withStyles(styles)(Setting);
