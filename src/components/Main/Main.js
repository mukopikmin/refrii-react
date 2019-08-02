import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import BoxInfo from '../BoxInfo';
import BoxList from '../BoxList';
import FoodList from '../FoodList';
import Header from '../Header';
import styles from './Main.module.css';

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
      <div>
        <div>
          <Header toggle={this.toggleDrawer} />
        </div>
        <div className={styles.content}>
          <Container>
            <Row>
              <Col sm={4}>
                <BoxList />
              </Col>
              <Col sm={8}>
                {this.renderBoxInfo()}
                <div className={styles.list}>
                  <FoodList />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Main;
