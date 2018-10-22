import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { title } = this.props;
    return (
      <header>
        <div className="container">
          <h2>
            {title}
          </h2>
        </div>
      </header>
    );
  }
}

export default Header;