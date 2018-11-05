import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class SubItemNavigation extends PureComponent {
  render() {
    const { routes } = this.props;
    return routes.map((node, index) => (
      <NavItem key={node.title}>
        <NavLink to={node.path} className="nav-link">
          {node.title}
        </NavLink>
      </NavItem>
    ));
  }
}

export default SubItemNavigation;