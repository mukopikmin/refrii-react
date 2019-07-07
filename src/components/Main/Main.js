import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import BoxInfo from '../BoxInfo';
import FoodList from '../FoodList';
import BoxDrawer from '../BoxDrawer';
import Header from '../Header';
import styles from './Main.module.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.toggleDrawer = this.toggleDrawer.bind(this);

    this.state = { drawerOpen: false };
  }

  toggleDrawer() {
    this.setState(pre => ({
      ...pre,
      drawerOpen: !pre.drawerOpen,
    }));
  }

  renderBoxInfo() {
    const { box } = this.props;

    if (box) {
      return <BoxInfo box={box} />;
    }
    return <div />;
  }

  render() {
    const { drawerOpen } = this.state;

    return (
      <div>
        <div>
          <Header toggle={this.toggleDrawer} />
        </div>
        <div className={styles.content}>
          <Container>
            <Row>
              <Col sm={4}>
                <BoxDrawer toggle={this.toggleDrawer} open={drawerOpen} />
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
