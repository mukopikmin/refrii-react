import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Button } from 'reactstrap';
import './Header.css'

class Header extends Component {
  render() {
    const { session }=this.props

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
                Option 1
                </DropdownItem>
                <DropdownItem>
                Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                Sign out
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
