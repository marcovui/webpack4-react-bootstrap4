import React, { Component } from 'react';

class HeaderHero extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { title } = this.props;
    return (
      <div>Header</div>
    );
  }
}

export default HeaderHero;