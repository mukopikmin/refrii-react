import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import BoxList from '../BoxList';
import BoxInfo from '../BoxInfo';
import FoodList from '../FoodList';

class Main extends Component {
  renderBoxInfo() {
    const { box } = this.props;

    if (box) {
      return <BoxInfo box={box} />;
    }
    return <div />;
  }

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item sm={3}>
          <BoxList />
        </Grid>
        <Grid item sm={6}>
          <FoodList />
        </Grid>
        <Grid item sm={3}>
          {this.renderBoxInfo()}
        </Grid>
      </Grid>
    );
  }
}

export default Main;
