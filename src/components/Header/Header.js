import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Container } from 'reactstrap';
import './Header.css';
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    const { session, signout } = this.props;

    return (
      <div id="header">
        <Navbar fixed="top" color="light" light expand="md">
          <Container>
            <NavbarBrand href="/">Refrii</NavbarBrand>
            <Nav navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {session.user.name}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/account">
                    アカウント情報
                    </Link>
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

export default Header;
