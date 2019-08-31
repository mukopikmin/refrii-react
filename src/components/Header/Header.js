import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCog } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toRoot = this.toRoot.bind(this);
    this.toSetting = this.toSetting.bind(this);
    this.toAdmin = this.toAdmin.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.reload = this.reload.bind(this);
    this.renderAdminMenu = this.renderAdminMenu.bind(this);

    this.state = { menuOpen: false };
  }

  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  reload() {
    const { reload } = this.props;

    this.closeMenu();
    reload();
  }

  toRoot() {
    const { history } = this.props;

    this.closeMenu();
    history.push("/");
  }

  toSetting() {
    const { history } = this.props;

    this.closeMenu();
    history.push("/setting");
  }

  toAdmin() {
    const { history } = this.props;

    this.closeMenu();
    history.push("/admin");
  }

  renderAction() {
    const { location } = this.props;

    if (location.pathname === "/") {
      return <Button>{/* <MenuIcon /> */}</Button>;
    }

    return <div />;
  }

  renderAdminMenu() {
    const { session } = this.props;

    if (session.user.admin) {
      return (
        <NavDropdown.Item onClick={this.toAdmin}>
          管理者メニュー
        </NavDropdown.Item>
      );
    }

    return <div />;
  }

  render() {
    const { session, signout, toggleSidebar } = this.props;

    return (
      <div>
        <Navbar bg="light" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand>
              <div className={styles.logo}>
                <img
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  src={logo}
                  alt=""
                  onClick={this.toRoot}
                />
              </div>
              <div className={styles.sidebar}>
                <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
              </div>
            </Navbar.Brand>
            <Nav>
              <NavDropdown title={<FontAwesomeIcon icon={faCog} />} drop="down">
                <NavDropdown.Item onClick={this.toRoot}>
                  食材一覧を表示
                </NavDropdown.Item>
                <NavDropdown.Item onClick={this.reload}>
                  再読込
                </NavDropdown.Item>
                <NavDropdown.Item onClick={this.toSetting}>
                  設定
                </NavDropdown.Item>
                {this.renderAdminMenu()}
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={signout}>
                  <span>ログアウト</span>
                  <br />
                  <small>{`${session.user.name} としてログインしています`}</small>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  session: PropTypes.shape({}).isRequired,
  signout: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(Header);
