import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import GoogleAuthContainer from '../containers/GoogleAuthContainer';
import BoxListContainer from '../containers/BoxListContainer';
import BoxContainer from '../containers/BoxContainer';
import HeaderContainer from '../containers/HeaderContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <HeaderContainer />

            <Route exact path="/" component={BoxListContainer} />
            <Route exact path="/boxes" component={BoxListContainer} />
            <Route path="/boxes/:id" component={BoxContainer} />
            <Route path="/signin" component={GoogleAuthContainer} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
