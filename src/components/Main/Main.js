import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import BoxInfo from '../BoxInfo';
import FoodList from '../FoodList';
import BoxDrawer from '../BoxDrawer';
import Header from '../Header';

const drawerWidth = 360;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  content: {
    flexGrow: 1,
    marginTop: 80,
    // padding: theme.spacing.unit,
  },
});

class Main extends Component {
  constructor(props) {
    super(props);

    this.toggleDrawer = this.toggleDrawer.bind(this);

    this.state = { drawerOpen: false };
  }

  toggleDrawer() {
    this.setState(pre => ({
      ...pre,
      drawerOpen: !pre.drawerOpen,
    }));
  }

  renderBoxInfo() {
    const { box } = this.props;

    if (box) {
      return <BoxInfo box={box} />;
    }
    return <div />;
  }

  render() {
    const { classes } = this.props;
    const { drawerOpen } = this.state;

    return (
      <div className={classes.root}>
        <Header toggle={this.toggleDrawer} />
        <nav className={classes.drawer}>
          <BoxDrawer toggle={this.toggleDrawer} open={drawerOpen} />
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <Grid container spacing={24}>
              <Grid item sm={9}>
                <FoodList />
              </Grid>
              <Grid item sm={3}>
                {this.renderBoxInfo()}
              </Grid>
            </Grid>
          </div>
        </main>
      </div>

    );
  }
}

export default withStyles(styles, { withTheme: true })(Main);
