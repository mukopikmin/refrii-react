import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import Landing from "../../components/Landing";
import SignUp from "../../components/SignUp";
import Admin from "../Admin";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import Main from "../Main";
import Setting from "../Setting";
import styles from "./App.module.css";
import Notification from "../../components/Notification";

class App extends Component {
  render() {
    const { session } = this.props;
    const { user } = session;

    if (!user) {
      return (
        <Fragment>
          <BrowserRouter>
            <div className={styles.content}>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/privacy" component={PrivacyPolicy} />
                <Route path="/signup" component={SignUp} />
                <Route component={Landing} />
              </Switch>
            </div>
          </BrowserRouter>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <BrowserRouter>
          <div>
            <div>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/setting" component={Setting} />
                <Route path="/admin" component={Admin} />
                <Route path="/" component={Main} />
              </Switch>
            </div>

            <Container>
              <Notification />
            </Container>
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
