import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand
} from 'reactstrap';
import ListItemNavigation from './ListItemNavigation';
import AuthButton from './AuthButton';
import Routes from '../../../routes/Routes';

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
        <div role="button" tabIndex={0} className={`overlay-bg ${classIsOpen}`} onClick={this.toggle} onKeyDown={this.toggle} />
        <Navbar color="dark" dark fixed="top" expand="md" className={`${classIsScrolling} navigation-${position}`}>
          <div className="container">
            <NavbarBrand href="/">
              {'reactstrap'}
            </NavbarBrand>
            { /* <NavbarToggler onClick={this.toggle} /> */ }
            <button className={`navbar-toggler hamburger hamburger--collapse ${classIsOpen}`} type="button" onClick={this.toggle}>
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
            <Collapse navbar {...collapseIsOpen} className={classIsOpen}>
              <ListItemNavigation data={Routes} toggle={this.toggle} />
              { /* <AuthButton /> */ }
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
  resizeMenuNavAt: 200
};

MenuNavigation.propTypes = {
  position: PropTypes.string,
  resizeMenuNavAt: PropTypes.number
};