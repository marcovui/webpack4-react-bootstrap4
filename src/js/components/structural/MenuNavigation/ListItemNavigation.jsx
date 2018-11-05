import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import ItemNavigation from './ItemNavigation';
import SubItemNavigation from './SubItemNavigation';

class ListItemNavigation extends PureComponent {
  list(data) {
    const children = (routes) => {
      if (routes) {
        return (
          <ul>{ this.list(routes) }</ul>
        );
      }
      return (null);
    };

    return data.map((node, index) => {
      if (node.routes == null) {
        return (
          <ItemNavigation key={node.title} {...node} toggle={this.props.toggle} />
        );
      }

      return (
        <UncontrolledDropdown nav inNavbar key={node.title}>
          <DropdownToggle nav caret>
            {node.title}
          </DropdownToggle>
          <DropdownMenu right tag="ul">
            <SubItemNavigation routes={node.routes} toggle={this.props.toggle} />
          </DropdownMenu>
        </UncontrolledDropdown>
      );
    });
  }

  render() {
    const { data } = this.props;
    return (
      <Nav className="ml-auto" navbar>
        {this.list(data)}
      </Nav>
    );
  }
}

export default ListItemNavigation;