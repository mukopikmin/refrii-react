import React, { Component } from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
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
              <Col md={5}>
                <h1 className={styles.appName}>
                  <img src={logo} alt="" className={styles.logo} />
                  Refrii
                </h1>
                <p className={styles.explain}>
                  Refrii は冷蔵庫の中身を管理し、家族で共有するためのサービスです。
                </p>
              </Col>
              <Col md={{ span: 5, offset: 2 }}>
                <div className={styles.startApp}>
                  <Button onClick={signin}>
                    <FontAwesomeIcon icon={faGoogle} className={styles.googleLogo} />
                    <span>Google アカウントでログイン</span>
                  </Button>
                  <p className={styles.signupExplain}>
                    アカウントをお持ちでない場合は、
                    <Link to="/signup">こちら</Link>
からアカウントを作成してください。
                    {/* ログインしてサービスの利用を開始した場合、
                    <Link to="/privacy">プライバシーポリシー</Link>
                    に同意されたものとみなします。 */}
                  </p>
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
