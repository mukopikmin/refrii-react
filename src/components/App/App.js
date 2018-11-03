import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { PropTypes } from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from '../Landing';
import BoxList from '../BoxList';
import Header from '../Header';
import FoodList from '../FoodList';
import Setting from '../Setting';
import EditBoxModal from '../EditBoxModal';
import EditFoodModal from '../EditFoodModal';
import EditUnitModal from '../EditUnitModal';
import BoxInfo from '../BoxInfo';
import Box from '../../models/box';
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
        <BrowserRouter>
          <div>
            <Header />
            <Container className={styles.main}>
              <Row>
                <Col sm={3}>
                  <BoxList />
                </Col>
                <Col sm={6}>
                  <Route exact path="/" component={FoodList} />
                  <Route exact path="/boxes/:id" component={FoodList} />
                  <Route exact path="/setting" component={Setting} />
                </Col>
                <Col sm={3}>
                  {this.renderBoxInfo()}
                </Col>
              </Row>
            </Container>

            <EditBoxModal />
            <EditFoodModal />
            <EditUnitModal />
          </div>
        </BrowserRouter>
      );
    }

    return <Landing />;
  }
}

App.propTypes = {
  session: PropTypes.shape({
    user: PropTypes.shape({}),
  }),
  boxes: PropTypes.arrayOf(PropTypes.instanceOf(Box)).isRequired,
  selectedBoxId: PropTypes.number,
};

App.defaultProps = {
  session: {
    user: {},
  },
  selectedBoxId: 0,
};

export default App;
