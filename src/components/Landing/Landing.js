import React, { Component } from "react";
import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
import logo from "../../assets/logo.png";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.toPrivacyPolicy = this.toPrivacyPolicy.bind(this);
  }

  componentDidMount() {
    const { watchAuthState } = this.props;

    watchAuthState();
  }

  toPrivacyPolicy() {
    const { history } = this.props;

    history.push("/privacy");
  }

  render() {
    const { signin } = this.props;

    return (
      <div className={styles.background}>
        <div className={styles.whiten}>
          <Container>
            <Navbar bg="transparent" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
              >
                <Nav>
                  <Nav.Link onClick={this.toPrivacyPolicy}>
                    <span className={styles.header}>プライバシーポリシー</span>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <div className={styles.content}>
              <Row>
                <Col md={5}>
                  <h1 className={styles.appName}>
                    <img src={logo} alt="" className={styles.logo} />
                    Refrii
                  </h1>
                  <p className={styles.explain}>
                    Refrii
                    は冷蔵庫の中身を管理し、家族で共有するためのサービスです。
                  </p>
                </Col>
                <Col md={{ span: 5, offset: 2 }}>
                  <div className={styles.startApp}>
                    <Button onClick={signin}>
                      <FontAwesomeIcon
                        icon={faGoogle}
                        className={styles.googleLogo}
                      />
                      <span>Google アカウントでログイン</span>
                    </Button>
                    <p className={styles.signupExplain}>
                      アカウントをお持ちでない場合は、
                      <Link to="/signup">こちら</Link>
                      からアカウントを作成してください。
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default Landing;
