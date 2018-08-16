import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import GoogleAuth from '../GoogleAuth';
import BoxList from '../BoxList';
import Header from '../Header';
import FoodList from '../FoodList';
import Setting from '../Setting';
import EditBoxModal from '../EditBoxModal';
import EditUnitModal from '../EditUnitModal';

class App extends Component {
  componentDidMount() {
    this.content = this.content.bind(this);
  }

  content() {
    if (this.props.session.user) {
      return (
        <BrowserRouter>
          <div>
            <Header />
            <Container>
              <Row>
                <Col xs="3">
                  <BoxList />
                </Col>
                <Col xs="9">
                  <Route exact path="/" component={GoogleAuth} />
                  <Route exact path="/boxes/:id" component={FoodList} />
                  <Route exact path="/setting" component={Setting} />
                </Col>
              </Row>

              <EditBoxModal />
              <EditUnitModal />
            </Container>
          </div>
        </BrowserRouter>
      );
    }

    return <GoogleAuth />;
  }

  render() {
    const content = this.content();

    return (
      <div>
        {content}
      </div>
    );
  }
}

export default App;
