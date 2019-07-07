import React, { Component } from 'react';
import BoxList from '../BoxList';
// import styles from './BoxList.module.css';

class BoxDrawer extends Component {
  render() {
    const {
      container, toggleDrawer, open, classes,
    } = this.props;

    return (
      <BoxList />

    // <nav>
    //   <Hidden smUp implementation="css">
    //     <Drawer
    //       container={container}
    //       variant="temporary"
    //       anchor="left"
    //       open={open}
    //       onClose={toggleDrawer}
    //       classes={{
    //         paper: classes.drawerPaper,
    //       }}
    //       ModalProps={{
    //         keepMounted: true, // Better open performance on mobile.
    //       }}
    //     >
    //       <BoxList />
    //     </Drawer>
    //   </Hidden>
    //   <Hidden xsDown implementation="css">
    //     <Drawer
    //       classes={{
    //         paper: classes.drawerPaper,
    //       }}
    //       variant="permanent"
    //       open
    //     >
    //       <div className={classes.boxList}>
    //         <BoxList />
    //       </div>
    //     </Drawer>
    //   </Hidden>
    // </nav>
    );
  }
}

export default BoxDrawer;
