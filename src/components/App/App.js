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
import BoxInfo from '../BoxInfo';

class App extends Component {
  constructor(props) {
    super(props);

    const { onLoad } = this.props;

    this.content = this.content.bind(this);
    onLoad();
  }

  content() {
    const { session, boxes, selectedBoxId } = this.props;
    const { user } = session;
    const box = boxes.filter(b => b.id === selectedBoxId)[0];

    if (user) {
      return (
        <BrowserRouter>
          <div>
            <Header />
            <Row>
              <Col sm="3">
                <BoxList />
              </Col>
              <Col sm="6">
                <Route exact path="/" component={FoodList} />
                <Route exact path="/boxes/:id" component={FoodList} />
                <Route exact path="/setting" component={Setting} />
              </Col>
              <Col sm={3}>
                {(() => {
                  if (box) {
                    return <BoxInfo box={box} />;
                  }
                  return <div />;
                })()}
              </Col>
            </Row>

            <EditBoxModal />
            <EditFoodModal />
            <EditUnitModal />
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
