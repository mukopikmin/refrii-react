import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from '../Landing';
import Header from '../Header';
import Main from '../Main';
import Setting from '../Setting';
import EditBoxModal from '../EditBoxModal';
import EditFoodModal from '../EditFoodModal';
import EditUnitModal from '../EditUnitModal';
import styles from './App.module.css';
import InvitationDialog from '../InvitationDialog';
import EditAmountModal from '../EditAmountModal';
import Notification from '../Notification';

class App extends Component {
  render() {
    const { session } = this.props;
    const { user } = session;

    if (!user) {
      return <Landing />;
    }

    return (
      <Fragment>
        <CssBaseline />
        <BrowserRouter>
          <div>
            <div className={styles.header}>
              <Header />
            </div>
            <div className={styles.root}>
              <Route exact path="/" component={Main} />
              <Route exact path="/setting" component={Setting} />
            </div>

            <EditBoxModal />
            <EditFoodModal />
            <EditUnitModal />
            <EditAmountModal />
            <InvitationDialog />

            <Notification />
          </div>
        </BrowserRouter>
      </Fragment>
    );
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
