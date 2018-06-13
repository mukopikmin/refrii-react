import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

import GoogleAuthContainer from '../containers/GoogleAuthContainer';
import BoxListContainer from '../containers/BoxListContainer';
import BoxContainer from '../containers/BoxContainer';
import HeaderContainer from '../containers/HeaderContainer';
import FoodListContainer from '../containers/FoodListContainer';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <HeaderContainer />
            <Container>
              <Row>
                <Col xs="3">
                  <BoxListContainer />
                </Col>
                <Col xs="9">
                  <Route exact path="/" component={GoogleAuthContainer} />
                  <Route path="/boxes/:id" component={FoodListContainer} />
                </Col>
              </Row>
            </Container>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
