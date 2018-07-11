import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

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

class BoxList extends Component {
  constructor() {
    super();

    this.select = this.select.bind(this);
  }
  componentDidMount() {
    const { onLoad, credential } = this.props;
    onLoad(credential);
  }

  select(box) {
    this.props.select(box);
    this.props.history.push(`/boxes/${box.id}`);
  }

  render() {
    const { boxes, classes } = this.props;

    return (
      <Drawer
        variant="permanent"
        classes={{
            paper: classes.drawerPaper,
          }}
      >
        <div className={classes.toolbar} />
        <List>
          {boxes.map(box => (
            <ListItem key={box.id} onClick={() => this.select(box)}>{box.name}</ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
}

export default compose(
  withRouter,
  withStyles(styles),
)(BoxList);
