import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class NavLinkNavigation extends PureComponent {
  render() {
    const { exact, path, children } = this.props;
    return (
      <NavLink exact={exact} to={path} className="nav-link" onClick={this.props.toggle}>
        {children}
      </NavLink>
    );
  }
}

export default NavLinkNavigation;