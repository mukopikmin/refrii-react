import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from '../Landing';
import BoxList from '../BoxList';
import Header from '../Header';
import FoodList from '../FoodList';
import Setting from '../Setting';
import EditBoxModal from '../EditBoxModal';
import EditFoodModal from '../EditFoodModal';
import EditUnitModal from '../EditUnitModal';
import EditAmountModal from '../EditAmountModal';
import BoxInfo from '../BoxInfo';
import styles from './App.module.css';

class App extends Component {
  renderBoxInfo() {
    const { box } = this.props;

    if (box) {
      return <BoxInfo box={box} />;
    }
    return <div />;
  }

  render() {
    const { session } = this.props;
    const { user } = session;

    if (user) {
      return (
        <React.Fragment>
          <CssBaseline />
          <BrowserRouter>
            <div>
              <Header />
              <div className={styles.root}>
                <Grid container spacing={24}>
                  <Grid item xs={3}>
                    <BoxList />
                  </Grid>
                  <Grid item xs={6}>
                    <Route exact path="/" component={FoodList} />
                    <Route exact path="/boxes/:id" component={FoodList} />
                    <Route exact path="/setting" component={Setting} />
                  </Grid>
                  <Grid item xs={3}>
                    {this.renderBoxInfo()}
                  </Grid>
                </Grid>
              </div>

              <EditBoxModal />
              <EditFoodModal />
              <EditUnitModal />
              <EditAmountModal />
            </div>
          </BrowserRouter>
        </React.Fragment>
      );
    }

    return <Landing />;
  }
}

App.propTypes = {
  session: PropTypes.shape({
    user: PropTypes.shape({}),
  }),
};

App.defaultProps = {
  session: {
    user: {},
  },
};

export default App;
