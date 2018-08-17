import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Container } from 'reactstrap';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

import './Header.css';

class Header extends Component {
  componentDidMount() {
    this.handleToSetting = this.handleToSetting.bind(this);
  }

  handleToSetting() {
    this.props.history.push('/setting');
  }

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
