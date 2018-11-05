import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import {
  NavLink,
  withRouter
} from 'react-router-dom';
import Routes from '../../../routes/Routes';
import fakeAuth from '../../auth/fakeAuth';

const AuthButton = withRouter(
  ({ history }) => fakeAuth.isAuthenticated ? (
    <div className="py-3 pl-3 text-white">
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
    <div className="py-3 pl-3 text-white">
      {'You are not logged in.'}
    </div>
  )
);

class Item extends PureComponent {
  render() {
    const { title, path, children } = this.props;
    return (
      <NavItem>
        <NavLink exact to={path} className="nav-link">
          {title}
        </NavLink>
      </NavItem>
    );
  }
}
class SubItems extends PureComponent {
  render() {
    const { routes } = this.props;
    return routes.map((node, index) => (
      <NavItem key={`sub${node.title}`}>
        <NavLink to={node.path} className="nav-link">
          {node.title}
        </NavLink>
      </NavItem>
    ));
  }
}

class List extends PureComponent {
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
          <Item key={node.title} {...node} />
        );
      }

      return (
        <UncontrolledDropdown nav inNavbar key={node.title}>
          <DropdownToggle nav caret>
            {node.title}
          </DropdownToggle>
          <DropdownMenu right tag="ul">
            <SubItems routes={node.routes} />
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

class MenuNavigation extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isScrolling: false
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollTop = window.scrollY;
    const { resizeMenuNavAt } = this.props;
    this.setState({
      isScrolling: (scrollTop > resizeMenuNavAt) === true
    });
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { isOpen, isScrolling } = this.state;
    const { position } = this.props;
    const classIsOpen = isOpen ? 'active' : '';
    const classIsScrolling = isScrolling ? 'is-scrolling' : '';
    const collapseIsOpen = position === 'top' ? {
      isOpen
    } : {};

    return (
      <React.Fragment>
        <div className={`overlay-bg ${classIsOpen}`} />
        <Navbar color="dark" dark fixed="top" expand="lg" className={`${classIsScrolling} navigation-${position}`}>
          <div className="container">
            <NavbarBrand href="/">
              {'reactstrap'}
            </NavbarBrand>
            { /* <NavbarToggler onClick={this.toggle} /> */}
            <button className={`navbar-toggler hamburger hamburger--collapse ${classIsOpen}`} type="button" onClick={this.toggle}>
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
            <Collapse navbar {...collapseIsOpen} className={classIsOpen}>
              <List data={Routes} />
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default MenuNavigation;

MenuNavigation.defaultProps = {
  position: 'left', // top | left | right
  resizeMenuNavAt: 500
};

MenuNavigation.propTypes = {
  position: PropTypes.string,
  resizeMenuNavAt: PropTypes.number
};