import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ITEM_HEIGHT = 48;

class FoodMenu extends Component {
  constructor() {
    super();

    this.state = {
      anchorEl: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.close = this.close.bind(this);
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  close() {
    this.setState({ anchorEl: null });
  }

  edit() {
    this.close();
  }

  remove() {
    this.props.remove()
    this.close();
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          <MenuItem onClick={this.edit}>
          編集
          </MenuItem>
          <MenuItem onClick={this.remove}>
          削除
          </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default FoodMenu;
