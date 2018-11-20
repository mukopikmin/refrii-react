import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';

import Box from '../../models/box';
import styles from './BoxList.module.css';

class BoxList extends Component {
  componentDidMount() {
    const { onLoad } = this.props;

    this.select = this.select.bind(this);
    onLoad();
  }

  select(box) {
    const { select } = this.props;

    select(box);
  }

  render() {
    const { boxes, edit, add } = this.props;

    return (
      <div className={styles.root}>
        <List
          component="nav"
          subheader={<ListSubheader component="div">カテゴリ</ListSubheader>}
        >
          {boxes.map(box => (
            <ListItem key={box.id} button onClick={() => this.select(box)}>
              <ListItemIcon>
                <CreateIcon onClick={() => edit(box)} />
              </ListItemIcon>
              <ListItemText inset primary={box.name} />
            </ListItem>
          ))}
        </List>
        <div className={styles.add}>
          <Button variant="outlined" color="primary" fullWidth onClick={add}>
            <AddIcon />
          </Button>
        </div>
      </div>
    );
  }
}

BoxList.propTypes = {
  onLoad: PropTypes.func.isRequired,
  select: PropTypes.func.isRequired,
  boxes: PropTypes.arrayOf(PropTypes.instanceOf(Box)).isRequired,
  edit: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(BoxList);
