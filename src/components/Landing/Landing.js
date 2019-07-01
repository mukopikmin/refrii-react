import React, { Component } from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import styles from './Landing.module.css';
import logo from '../../assets/logo.png';

class Landing extends Component {
  componentDidMount() {
    const { watchAuthState } = this.props;

    watchAuthState();
  }

  render() {
    const { signin } = this.props;

    return (
      <div className={styles.background}>
        <div className={styles.whiten}>
          <Container className={styles.content}>
            <Row>
              <Col md={6}>
                <h1 className={styles.appName}>
                  <img src={logo} alt="" className={styles.logo} />
                  Refrii
                </h1>
                <p className={styles.explain}>
                  Refrii は冷蔵庫の中身を管理し、家族で共有するためのサービスです。
                </p>
              </Col>
              <Col md={6}>
                <div className={styles.startApp}>
                  <Button onClick={signin}>
                    <FontAwesomeIcon icon={faGoogle} className={styles.googleLogo} />
                Google アカウントでログイン
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Landing;
