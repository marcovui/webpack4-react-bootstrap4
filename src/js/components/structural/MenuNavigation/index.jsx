import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import {
  NavLink,
  withRouter
} from 'react-router-dom';
import fakeAuth from '../../auth/fakeAuth';

const AuthButton = withRouter(
  ({ history }) => fakeAuth.isAuthenticated ? (
    <div className="ml-5 text-white">
      {'Welcome! '}
      <button
        type="button"
        className="btn btn-link p-0"
        onClick={() => {
          fakeAuth.signout(() => history.push('/'));
        }}
      >
        {'Sign out'}
      </button>
    </div>
  ) : (
    <div className="ml-5 text-white">
      {'You are not logged in.'}
    </div>
  )
);

class MenuNavigation extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { isOpen } = this.state;
    const classIsOpen = isOpen ? 'active' : '';

    return (
      <div>
        <Navbar color="white" light fixed="top" expand="lg">
          <div className="container">
            <NavbarBrand href="/">
              {'reactstrap'}
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse navbar className={classIsOpen}>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink exact to="/" className="nav-link">
                    {'Home'}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/es6-features" className="nav-link">
                    {'EcmaScript 6 Features'}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/redux" className="nav-link">
                    {'Redux'}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/store" className="nav-link">
                    {'Storejs'}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/protected" className="nav-link">
                    {'Protected'}
                  </NavLink>
                </NavItem>
              </Nav>
              <AuthButton />
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default MenuNavigation;