import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class ItemNavigation extends PureComponent {
  render() {
    const { title, path, children } = this.props;
    return (
      <NavItem>
        <NavLink exact to={path} className="nav-link" onClick={this.props.toggle}>
          {title}
        </NavLink>
      </NavItem>
    );
  }
}

export default ItemNavigation;