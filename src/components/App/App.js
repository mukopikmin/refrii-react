import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import GoogleAuth from '../GoogleAuth';
import BoxList from '../BoxList';
import Header from '../Header';
import FoodList from '../FoodList';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

class App extends Component {
  componentDidMount() {
    this.content = this.content.bind(this);
  }

  content() {
    if (this.props.session.user) {
      const { classes } = this.props;

      return (
        <BrowserRouter>
          <div className={classes.root}>
            <Header />
            <BoxList />
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Route exact path="/" component={GoogleAuth} />
              <Route path="/boxes/:id" component={FoodList} />
            </main>
          </div>
        </BrowserRouter>
      );
    }

    return <GoogleAuth />;
  }

  render() {
    const content = this.content();

    return (
      <div>
        {content}
      </div>
    );
  }
}

export default withStyles(styles)(App);
