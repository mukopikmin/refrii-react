import React, { Component } from 'react';
import {
  Navbar, NavbarBrand, Nav, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, Container,
} from 'reactstrap';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

import logo from '../../assets/logo.png';
import styles from './Header.module.css';

class Header extends Component {
  componentDidMount() {
    this.handleToSetting = this.handleToSetting.bind(this);
  }

  handleToSetting() {
    const { history } = this.props;

    history.push('/setting');
  }

  render() {
    const { session, signout } = this.props;

    return (
      <div className={styles.header}>
        <Navbar className={styles.navbar} fixed="top" expand="md">
          <Container>
            <NavbarBrand className={styles.brand} href="/">
              <img className={styles.logo} src={logo} alt="" />
              {' '}
              Refrii
            </NavbarBrand>
            <Nav navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className={styles.brand} nav caret>
                  {session.user.name}
                </DropdownToggle>
                <DropdownMenu className={styles.brand} right>
                  <DropdownItem onClick={() => this.handleToSetting()}>
                    設定
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={signout}>
                  ログアウト
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
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
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Header);
