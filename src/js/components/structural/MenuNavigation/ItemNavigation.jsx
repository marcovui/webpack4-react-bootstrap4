import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavItem } from 'reactstrap';
import NavLinkNavigation from './NavLinkNavigation';

class ItemNavigation extends Component {
  render() {
    const { title, ...rest } = this.props;
    return (
      <NavItem>
        <NavLinkNavigation {...rest} clasNasme="nav-link">
          <span>{title}</span>
        </NavLinkNavigation>
      </NavItem>
    );
  }
}

export default ItemNavigation;