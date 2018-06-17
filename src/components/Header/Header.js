import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Container } from 'reactstrap';
import './Header.css';

class Header extends Component {
  render() {
    const { session, signout } = this.props;

    return (
      <div id="header">
        <Navbar color="light" light expand="md">
          <Container>
            <NavbarBrand href="/">Refrii</NavbarBrand>
            <Nav navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {session.user.name}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  アカウント情報
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
