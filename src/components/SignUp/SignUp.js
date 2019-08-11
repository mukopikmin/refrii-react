import React, { Component } from 'react';
import {
  Container, Row, Col, Button, Form,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.css';
import logo from '../../assets/logo.png';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.onPrivacyPolicyChanged = this.onPrivacyPolicyChanged.bind(this);

    this.state = {
      privacyPolicyAccepted: false,
    };
  }

  componentDidMount() {
    const { watchAuthState } = this.props;

    watchAuthState();
  }

  onPrivacyPolicyChanged() {
    this.setState(pre => ({
      ...pre,
      privacyPolicyAccepted: !pre.privacyPolicyAccepted,
    }));
  }

  renderAcceptPolicyMessage() {
    return (
      <span>
        <Link to="/privacy">プライバシーポリシー</Link>
    に同意して、アカウントを作成します。
      </span>
    );
  }

  render() {
    const { signin } = this.props;
    const { privacyPolicyAccepted } = this.state;

    return (
      <div className={styles.background}>
        <div className={styles.whiten}>
          <Container className={styles.content}>
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <h1 className={styles.appName}>
                  <img src={logo} alt="" className={styles.logo} />
                </h1>

                <div className={styles.startApp}>
                  <Button onClick={signin} disabled={!privacyPolicyAccepted}>
                    <FontAwesomeIcon icon={faGoogle} className={styles.googleLogo} />
                    <span>Google アカウントでログイン</span>
                  </Button>

                  <Form className={styles.signupExplain}>
                    <Form.Group>
                      <Form.Check type="checkbox" label={this.renderAcceptPolicyMessage()} checked={privacyPolicyAccepted} onChange={this.onPrivacyPolicyChanged} />
                    </Form.Group>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default SignUp;
