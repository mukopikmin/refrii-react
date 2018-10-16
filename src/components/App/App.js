import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { PropTypes } from 'prop-types';

import Landing from '../Landing';
import BoxList from '../BoxList';
import Header from '../Header';
import FoodList from '../FoodList';
import Setting from '../Setting';
import EditBoxModal from '../EditBoxModal';
import EditFoodModal from '../EditFoodModal';
import EditUnitModal from '../EditUnitModal';

class App extends Component {
  componentDidMount() {
    this.content = this.content.bind(this);
  }

  content() {
    const { session } = this.props;
    const { user } = session;

    if (user) {
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
                  <Route exact path="/" component={FoodList} />
                  <Route exact path="/boxes/:id" component={FoodList} />
                  <Route exact path="/setting" component={Setting} />
                </Col>
              </Row>

              <EditBoxModal />
              <EditFoodModal />
              <EditUnitModal />
            </Container>
          </div>
        </BrowserRouter>
      );
    }

    return <Landing />;
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
