import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavItem } from 'reactstrap';
import NavLinkNavigation from './NavLinkNavigation';

class SubItemNavigation extends PureComponent {
  render() {
    const { routes, toggle } = this.props;
    return routes.map((node, index) => (
      <NavItem key={node.title}>
        <NavLinkNavigation {...node} toggle={toggle}>
          <span>{node.title}</span>
        </NavLinkNavigation>
      </NavItem>
    ));
  }
}

export default SubItemNavigation;