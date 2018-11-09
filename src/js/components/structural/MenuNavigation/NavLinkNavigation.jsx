import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

class NavLinkNavigation extends Component {
  render() {
    const { exact, path, children, toggle } = this.props;
    return (
      <NavLink exact={exact} to={path} activeClassName="active" className="nav-link" onClick={toggle}>
        {children}
      </NavLink>
    );
  }
}

export default NavLinkNavigation;